# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

# Table Definitions

class Customer(Base):
    """
    description: Stores information about customers who own the trailers.
    """
    __tablename__ = 'customers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=True)
    phone = Column(String, nullable=True)


class Trailer(Base):
    """
    description: Represents individual trailers with their specifications.
    """
    __tablename__ = 'trailers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    owner_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    model = Column(String, nullable=False)
    make = Column(String, nullable=False)
    year = Column(Integer, nullable=False)


class HaulingJob(Base):
    """
    description: Details on each hauling service provided for trailers.
    """
    __tablename__ = 'hauling_jobs'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trailer_id = Column(Integer, ForeignKey('trailers.id'), nullable=False)
    pickup_location = Column(String, nullable=False)
    dropoff_location = Column(String, nullable=False)
    date_initiated = Column(DateTime, default=datetime.datetime.utcnow)
    completed = Column(Boolean, default=False)


class Inspection(Base):
    """
    description: Stores results of trailer inspections.
    """
    __tablename__ = 'inspections'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trailer_id = Column(Integer, ForeignKey('trailers.id'), nullable=False)
    date_performed = Column(DateTime, default=datetime.datetime.utcnow)
    inspector_name = Column(String, nullable=False)
    passed = Column(Boolean, nullable=False)
    findings = Column(String, nullable=True)


class ServiceProvider(Base):
    """
    description: Details of service providers performing hauling or inspections.
    """
    __tablename__ = 'service_providers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    phone = Column(String, nullable=True)
    is_hauler = Column(Boolean, default=False)
    is_inspector = Column(Boolean, default=False)


class HaulerAssignment(Base):
    """
    description: Records which hauling jobs are assigned to which service providers.
    """
    __tablename__ = 'hauler_assignments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    job_id = Column(Integer, ForeignKey('hauling_jobs.id'), nullable=False)
    provider_id = Column(Integer, ForeignKey('service_providers.id'), nullable=False)


class InspectorAssignment(Base):
    """
    description: Links inspections to the service providers assigned to them.
    """
    __tablename__ = 'inspector_assignments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    inspection_id = Column(Integer, ForeignKey('inspections.id'), nullable=False)
    provider_id = Column(Integer, ForeignKey('service_providers.id'), nullable=False)


class ServiceReport(Base):
    """
    description: Detailed reports of every service provided, including cost and service type.
    """
    __tablename__ = 'service_reports'
    id = Column(Integer, primary_key=True, autoincrement=True)
    service_type = Column(String, nullable=False)  # e.g., 'hauling', 'inspection'
    performed_on = Column(DateTime, default=datetime.datetime.utcnow)
    provider_id = Column(Integer, ForeignKey('service_providers.id'), nullable=False)
    trailer_id = Column(Integer, ForeignKey('trailers.id'), nullable=False)
    cost = Column(Float, nullable=False)


class MaintenanceLog(Base):
    """
    description: Records ongoing maintenance activities and their status.
    """
    __tablename__ = 'maintenance_logs'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trailer_id = Column(Integer, ForeignKey('trailers.id'), nullable=False)
    activity_detail = Column(String, nullable=False)
    date_scheduled = Column(DateTime, default=datetime.datetime.utcnow)
    status = Column(String, nullable=False)  # e.g., 'pending', 'completed'


class RepairHistory(Base):
    """
    description: Detailed log of repairs made to trailers.
    """
    __tablename__ = 'repair_history'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trailer_id = Column(Integer, ForeignKey('trailers.id'), nullable=False)
    repair_date = Column(DateTime, default=datetime.datetime.utcnow)
    description = Column(String, nullable=False)
    cost = Column(Float, nullable=False)


class FeeSchedule(Base):
    """
    description: Charges for different services provided, such as hauling and inspections.
    """
    __tablename__ = 'fee_schedule'
    id = Column(Integer, primary_key=True, autoincrement=True)
    service_type = Column(String, nullable=False)  # e.g., 'hauling', 'inspection'
    rate = Column(Float, nullable=False)


class InsurancePolicy(Base):
    """
    description: Insurance policies associated with trailers.
    """
    __tablename__ = 'insurance_policies'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trailer_id = Column(Integer, ForeignKey('trailers.id'), nullable=False)
    policy_number = Column(String, nullable=False)
    provider_name = Column(String, nullable=False)
    coverage_amount = Column(Float, nullable=False)


# Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data
customers = [
    Customer(name="John Doe", email="johndoe@example.com", phone="123-456-7890"),
    Customer(name="Jane Smith", email="janesmith@example.com", phone="987-654-3210"),
]

trailers = [
    Trailer(owner_id=1, model="Grand Design Reflection", make="Grand Design", year=2021),
    Trailer(owner_id=2, model="Jayco Eagle", make="Jayco", year=2019),
]

service_providers = [
    ServiceProvider(name="Hauler One", phone="555-707-1234", is_hauler=True),
    ServiceProvider(name="Inspector Two", phone="555-808-5678", is_inspector=True),
]

hauling_jobs = [
    HaulingJob(trailer_id=1, pickup_location="Site A", dropoff_location="Site B"),
]

inspections = [
    Inspection(trailer_id=2, inspector_name="Inspector Two", passed=True, findings="No issues detected"),
]

hauler_assignments = [
    HaulerAssignment(job_id=1, provider_id=1),
]

inspector_assignments = [
    InspectorAssignment(inspection_id=1, provider_id=2),
]

service_reports = [
    ServiceReport(service_type="hauling", provider_id=1, trailer_id=1, cost=150.0),
]

maintenance_logs = [
    MaintenanceLog(trailer_id=1, activity_detail="Brake Check", status="completed"),
]

repair_history = [
    RepairHistory(trailer_id=1, description="Wheel replacement", cost=200.0),
]

fee_schedule = [
    FeeSchedule(service_type="hauling", rate=2.5),
    FeeSchedule(service_type="inspection", rate=3.0),
]

insurance_policies = [
    InsurancePolicy(trailer_id=1, policy_number="POL123456", provider_name="InsureCo", coverage_amount=10000.0),
]

# Adding data to the session
session.add_all(customers + trailers + service_providers + hauling_jobs + inspections +
                hauler_assignments + inspector_assignments + service_reports +
                maintenance_logs + repair_history + fee_schedule + insurance_policies)

# Commit to the database
session.commit()
session.close()
