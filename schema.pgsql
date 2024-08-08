CREATE Table
    TACourses (
        CourseID SERIAL PRIMARY KEY,
        CourseName VARCHAR(255) NOT NULL,
        DayOfTraining INT NOT NULL,
        Description TEXT,
        ImagePath VARCHAR(255) NOT NULL
    );    

INSERT INTO
    TACourses (CourseName, DayOfTraining, Description,ImagePath)
VALUES
    (
        'Tour',
        1,
        'A tour of the building and work areas.',
        '/classics.jpg'
    ),
    (
        'WHMIS',
        1,
        'Workplace Hazardous Materials Information System.',
        '/classics.jpg'
    ),
    (
        'Food Knowledge',
        1,
        'A basic understanding of food safety and the menu.',
        '/classics.jpg'
    ),
    (
        'Specials',
        1,
        'A review of the daily specials.',
        '/classics.jpg'
    ),
    (
        'POS',
        1,
        'Point of Sale system training.',
        '/classics.jpg'
    ),
    (
        'Situational serving',
        1,
        'How to handle difficult situations with customers.',
        '/classics.jpg'
    )