from django.db import models

# Create your models here.

class User(models.Model):
    name=models.CharField(max_length=200)
    user_id=models.CharField(max_length=100, unique=True)
    password=models.CharField(max_length=200)
    
    def __str__(self):
        return self.name

class Messagestore(models.Model):
    user_id=models.ForeignKey(User, on_delete=models.CASCADE, to_field='user_id')
    msg=models.CharField(max_length=100)
     
    def __str__(self):
        return self.user_id