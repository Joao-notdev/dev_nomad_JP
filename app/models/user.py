from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional

@dataclass
class User:
    user_id: int
    email: str
    hashed_password: Optional[str] = field(default=None, repr=False)
    full_name: str = field(default="")
    role: str = field(default="User")
    created_at: datetime = field(default_factory=datetime.utcnow)
    updated_at: datetime = field(default_factory=datetime.utcnow)
    id: uuid.UUID = field(default_factory=uuid.uuid4)
    is_active: bool = True
    is_deleted: bool = False


