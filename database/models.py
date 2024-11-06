# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 06, 2024 21:07:32
# Database: sqlite:////tmp/tmp.zMTXnhalVO/North_Star_Nomads/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Stores information about customers who own the trailers.
    """
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)
    phone = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    TrailerList : Mapped[List["Trailer"]] = relationship(back_populates="owner")



class FeeSchedule(SAFRSBaseX, Base):
    """
    description: Charges for different services provided, such as hauling and inspections.
    """
    __tablename__ = 'fee_schedule'
    _s_collection_name = 'FeeSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    service_type = Column(String, nullable=False)
    rate = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class ServiceProvider(SAFRSBaseX, Base):
    """
    description: Details of service providers performing hauling or inspections.
    """
    __tablename__ = 'service_providers'
    _s_collection_name = 'ServiceProvider'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    phone = Column(String)
    is_hauler = Column(Boolean)
    is_inspector = Column(Boolean)

    # parent relationships (access parent)

    # child relationships (access children)
    ServiceReportList : Mapped[List["ServiceReport"]] = relationship(back_populates="provider")
    HaulerAssignmentList : Mapped[List["HaulerAssignment"]] = relationship(back_populates="provider")
    InspectorAssignmentList : Mapped[List["InspectorAssignment"]] = relationship(back_populates="provider")



class Trailer(SAFRSBaseX, Base):
    """
    description: Represents individual trailers with their specifications.
    """
    __tablename__ = 'trailers'
    _s_collection_name = 'Trailer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    owner_id = Column(ForeignKey('customers.id'), nullable=False)
    model = Column(String, nullable=False)
    make = Column(String, nullable=False)
    year = Column(Integer, nullable=False)

    # parent relationships (access parent)
    owner : Mapped["Customer"] = relationship(back_populates=("TrailerList"))

    # child relationships (access children)
    HaulingJobList : Mapped[List["HaulingJob"]] = relationship(back_populates="trailer")
    InspectionList : Mapped[List["Inspection"]] = relationship(back_populates="trailer")
    InsurancePolicyList : Mapped[List["InsurancePolicy"]] = relationship(back_populates="trailer")
    MaintenanceLogList : Mapped[List["MaintenanceLog"]] = relationship(back_populates="trailer")
    RepairHistoryList : Mapped[List["RepairHistory"]] = relationship(back_populates="trailer")
    ServiceReportList : Mapped[List["ServiceReport"]] = relationship(back_populates="trailer")



class HaulingJob(SAFRSBaseX, Base):
    """
    description: Details on each hauling service provided for trailers.
    """
    __tablename__ = 'hauling_jobs'
    _s_collection_name = 'HaulingJob'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    trailer_id = Column(ForeignKey('trailers.id'), nullable=False)
    pickup_location = Column(String, nullable=False)
    dropoff_location = Column(String, nullable=False)
    date_initiated = Column(DateTime)
    completed = Column(Boolean)

    # parent relationships (access parent)
    trailer : Mapped["Trailer"] = relationship(back_populates=("HaulingJobList"))

    # child relationships (access children)
    HaulerAssignmentList : Mapped[List["HaulerAssignment"]] = relationship(back_populates="job")



class Inspection(SAFRSBaseX, Base):
    """
    description: Stores results of trailer inspections.
    """
    __tablename__ = 'inspections'
    _s_collection_name = 'Inspection'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    trailer_id = Column(ForeignKey('trailers.id'), nullable=False)
    date_performed = Column(DateTime)
    inspector_name = Column(String, nullable=False)
    passed = Column(Boolean, nullable=False)
    findings = Column(String)

    # parent relationships (access parent)
    trailer : Mapped["Trailer"] = relationship(back_populates=("InspectionList"))

    # child relationships (access children)
    InspectorAssignmentList : Mapped[List["InspectorAssignment"]] = relationship(back_populates="inspection")



class InsurancePolicy(SAFRSBaseX, Base):
    """
    description: Insurance policies associated with trailers.
    """
    __tablename__ = 'insurance_policies'
    _s_collection_name = 'InsurancePolicy'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    trailer_id = Column(ForeignKey('trailers.id'), nullable=False)
    policy_number = Column(String, nullable=False)
    provider_name = Column(String, nullable=False)
    coverage_amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    trailer : Mapped["Trailer"] = relationship(back_populates=("InsurancePolicyList"))

    # child relationships (access children)



class MaintenanceLog(SAFRSBaseX, Base):
    """
    description: Records ongoing maintenance activities and their status.
    """
    __tablename__ = 'maintenance_logs'
    _s_collection_name = 'MaintenanceLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    trailer_id = Column(ForeignKey('trailers.id'), nullable=False)
    activity_detail = Column(String, nullable=False)
    date_scheduled = Column(DateTime)
    status = Column(String, nullable=False)

    # parent relationships (access parent)
    trailer : Mapped["Trailer"] = relationship(back_populates=("MaintenanceLogList"))

    # child relationships (access children)



class RepairHistory(SAFRSBaseX, Base):
    """
    description: Detailed log of repairs made to trailers.
    """
    __tablename__ = 'repair_history'
    _s_collection_name = 'RepairHistory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    trailer_id = Column(ForeignKey('trailers.id'), nullable=False)
    repair_date = Column(DateTime)
    description = Column(String, nullable=False)
    cost = Column(Float, nullable=False)

    # parent relationships (access parent)
    trailer : Mapped["Trailer"] = relationship(back_populates=("RepairHistoryList"))

    # child relationships (access children)



class ServiceReport(SAFRSBaseX, Base):
    """
    description: Detailed reports of every service provided, including cost and service type.
    """
    __tablename__ = 'service_reports'
    _s_collection_name = 'ServiceReport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    service_type = Column(String, nullable=False)
    performed_on = Column(DateTime)
    provider_id = Column(ForeignKey('service_providers.id'), nullable=False)
    trailer_id = Column(ForeignKey('trailers.id'), nullable=False)
    cost = Column(Float, nullable=False)

    # parent relationships (access parent)
    provider : Mapped["ServiceProvider"] = relationship(back_populates=("ServiceReportList"))
    trailer : Mapped["Trailer"] = relationship(back_populates=("ServiceReportList"))

    # child relationships (access children)



class HaulerAssignment(SAFRSBaseX, Base):
    """
    description: Records which hauling jobs are assigned to which service providers.
    """
    __tablename__ = 'hauler_assignments'
    _s_collection_name = 'HaulerAssignment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    job_id = Column(ForeignKey('hauling_jobs.id'), nullable=False)
    provider_id = Column(ForeignKey('service_providers.id'), nullable=False)

    # parent relationships (access parent)
    job : Mapped["HaulingJob"] = relationship(back_populates=("HaulerAssignmentList"))
    provider : Mapped["ServiceProvider"] = relationship(back_populates=("HaulerAssignmentList"))

    # child relationships (access children)



class InspectorAssignment(SAFRSBaseX, Base):
    """
    description: Links inspections to the service providers assigned to them.
    """
    __tablename__ = 'inspector_assignments'
    _s_collection_name = 'InspectorAssignment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    inspection_id = Column(ForeignKey('inspections.id'), nullable=False)
    provider_id = Column(ForeignKey('service_providers.id'), nullable=False)

    # parent relationships (access parent)
    inspection : Mapped["Inspection"] = relationship(back_populates=("InspectorAssignmentList"))
    provider : Mapped["ServiceProvider"] = relationship(back_populates=("InspectorAssignmentList"))

    # child relationships (access children)
