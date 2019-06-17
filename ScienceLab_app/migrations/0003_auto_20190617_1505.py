# Generated by Django 2.2.2 on 2019-06-17 15:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ScienceLab_app', '0002_chemical'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='formula',
            name='atomic_number',
        ),
        migrations.AddField(
            model_name='formula',
            name='atomic_name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='formula',
            name='scientist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='formulas', to='ScienceLab_app.Scientist'),
        ),
        migrations.AlterField(
            model_name='institute',
            name='scientist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='institutes', to='ScienceLab_app.Scientist'),
        ),
        migrations.DeleteModel(
            name='Chemical',
        ),
    ]
