INSERT INTO department (dept_name) VALUES ('back of house'), ('front of house'), ('management');
INSERT INTO company_role (title, salary, dept_id) VALUES
('General Manager', 80000.00, 3),
('Head Chef', 60000.00, 1),
('Sous Chef', 30000.00, 1),
('Cook', 30000.00, 1),
('Dishwasher', 20000.00, 1),
('Front of House Manager', 40000.00, 2),
('Host', 30000.00, 2),
('Server', 20000.00, 1);


INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) VALUES
('Salfo', 'Bande', 1, null),
('Thomas', 'Minoungou', 6, 1),
('Evelyne', 'Bande', 2, null);
