# Generated by Django 2.2.2 on 2019-06-11 19:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Scientist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('photo_url', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Institute',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('street', models.TextField()),
                ('state', models.TextField()),
                ('zipcode', models.PositiveIntegerField()),
                ('scientist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='institute', to='ScienceLab_app.Scientist')),
            ],
        ),
        migrations.CreateModel(
            name='Formula',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('symbol', models.CharField(max_length=100)),
                ('atomic_number', models.PositiveIntegerField()),
                ('scientist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='formula', to='ScienceLab_app.Scientist')),
            ],
        ),
    ]