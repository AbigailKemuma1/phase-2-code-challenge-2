SMART GOAL PLANNER
You’re working with a fintech company building a Smart Goal Planner. This tool allows users to manage multiple savings goals, allocate deposits across them, and track progress toward each goal.

The application will fetch and persist all goal data from a local db.json file, simulated using json-server. This allows for full Create, Read, Update, and Delete (CRUD) functionality.

You’ll be building a goal management dashboard, where users can:
Add new financial goals (e.g., “Travel Fund”, “Emergency Fund”)
Track progress for each goal
Make deposits to any goal
See a full overview of all their savings activity
CORE FEATURES
Data Management & Persistence (via db.json and json-server)
All goal data will be stored in a db.json file.
json-server will be used to serve this db.json file as a REST API (e.g., http://localhost:3000/goalsLinks to an external site.).
The application will fetch (Read) the initial list of goals from db.json upon loading.
Multiple Savings Goals (CRUD Operations)
Allow users to Add (Create) new financial goals. When a new goal is added, it will be persisted to db.json via a POST request.
Allow users to Update existing goals. This includes modifying:
                  Name

                   A target amount

                   Category

                   Deadline to meet the goal

Updates will be sent to db.json via PUT or PATCH requests.
Allow users to delete different goals. When a goal is deleted, it will be removed from db.json via a DELETE request.
 3. Progress Tracking

Show:
                   The total amount saved for each goal against the target

                    Remaining amount

                     Visual Progress bar per goal

 4. Make Deposits (CRUD: Update savedAmount)

Allow users to Add an amount and select the goal to which they want to save it.
This action will Update the savedAmount field of the correct goal in db.json via a PATCH request.
Update the correct goal’s progress when a deposit is made.
 5. Overview

            Display:

                  Total number of goals

                   Total money saved across all goals

                  Goals completed (if any)

                   How much time is left for each goal

                  If a deadline is within 30 days and the goal is not complete, show a warning

                  If the deadline has passed without reaching the goal, mark it as Overdue