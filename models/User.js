export class User{
    construture(uid,displayName,phoneNumber,email,emailVerified,password,disabled,photoURL, created, updated){
        this.uid = uid;
        this.displayName = displayName || '';
        this.email = email;
        this.emailVerified = emailVerified || false;
        this.phoneNumber = phoneNumber || '';
        this.password = password;
        this.photoURL = photoURL || '';
        this.created = created || new Date();
        this.updated = updated || new Date();
        this.disabled = disabled || false;
        
    }
}
