from database_helper import Database


class StatsHelper():

    def __init__(self):
        self.database = Database()
        print("Stats Helping initialising!")

    def select_all_employee(self):
        result = self.database.fetch_all("SELECT * FROM employeedata")
        return result

    def select_all(self):
        result = self.database.fetch_all("SELECT * FROM dayroutine")
        return result


    def join_all(self):
        result = self.database.fetch_all("SELECT * FROM dayroutine as a left join employeedata b on a.employee_id = b.employee_id")
        return result

    # HINT: You can define more queries here, along with some python logic to calculate!
    def calculate_avg(self):
        result = self.database.fetch_all("SELECT AVG(work_time) AS workavg, AVG(sleep_time) AS sleepavg, AVG(exercise_time) AS exerciseavg, AVG(social_interaction_time) AS socialavg, AVG(a.employee_id) AS employeeid FROM dayroutine as a left join employeedata b on a.employee_id = b.employee_id GROUP BY a.employee_id")
        return result
