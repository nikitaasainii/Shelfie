from sqlalchemy import Column,Integer,String,Text,DateTime,Boolean,ForeignKey
from sqlalchemy.orm import relationship
from database import Base
import datetime
class User(Base):
    __tablename__="users"
    id=Column(Integer,primary_key=True,autoincrement=True,index=True)
    name=Column(String(100),nullable=False)
    email=Column(String(255),nullable=False,unique=True,index=True)
    hashed_password=Column(String(255),nullable=False)
    created_at=Column(DateTime,default=datetime.datetime.utcnow)

class Book(Base):
    __tablename__="books"
    id=Column(Integer,primary_key=True,index=True)
    title=Column(String(255),nullable=False)
    author=Column(String(255),nullable=True)
    cover_url=Column(Text,nullable=True)
    google_books_id=Column(String(100),index=True,unique=True)

class ReadingLog(Base):
    __tablename__="reading_log"
    id=Column(Integer,primary_key=True,index=True)
    user_id=Column(Integer,ForeignKey("users.id"),nullable=False)
    book_id=Column(Integer,ForeignKey("books.id"),nullable=False)
    status=Column(String(30),nullable=False,default="reading")
    rating=Column(Integer,nullable=True)
    reread_count=Column(Integer,nullable=True)
    notes=Column(Text,nullable=True)
    created_at=Column(DateTime,default=datetime.datetime.utcnow)

