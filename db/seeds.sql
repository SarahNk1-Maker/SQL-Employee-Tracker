INSERT INTO department (department_name)
VALUES ('HR'), ('Technology'), ('Consulting'), ('Sales'), ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES ('Associate', 45000, 1),
       ('Analyst', 60000, 1),
       ('Manager', 80000, 2),
       ('Senior Manager', 90000, 3),
       ('Consultant', 100000, 4),
       ('Director', 120000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, 3), -- John Doe has no manager (NULL)
  ('Jane', 'Smith', 2, 1),  -- Jane Smith's manager is John Doe (employee_id = 1)
  ('Bob', 'Johnson', 3, 1), -- Bob Johnson's manager is John Doe (employee_id = 1)
  ('Alice', 'Williams', 4, 2), -- Alice Williams's manager is Jane Smith (employee_id = 2)
  ('Eve', 'Davis', 5, 2); -- Eve Davis's manager is Jane Smith (employee_id = 2)

