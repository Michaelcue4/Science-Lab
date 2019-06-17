from django.db import models

class Scientist(models.Model):
    name = models.CharField(max_length = 100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Formula(models.Model):
    name = models.CharField(max_length = 200)
    symbol = models.CharField(max_length =100)
    atomic_name = models.CharField(max_length = 200, null = True)
    scientist = models.ForeignKey(Scientist,on_delete = models.CASCADE,related_name = 'formulas')

    def __str__(self):
        return self.name

class Institute(models.Model):
    name = models.CharField(max_length = 200)
    street = models.TextField()
    state = models.TextField()
    zipcode = models.PositiveIntegerField()
    scientist = models.ForeignKey(Scientist,on_delete = models.CASCADE, related_name = 'institutes')

    def __str__(self):
        return self.name