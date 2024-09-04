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
        ''
    ),
    (
        'WHMIS',
        1,
        'Workplace Hazardous Materials Information System.',
        ''
    ),
    (
        'Food Knowledge',
        1,
        'A basic understanding of food safety and the menu.',
        ''
    ),
    (
        'Specials',
        1,
        'A review of the daily specials.',
        ''
    ),
    (
        'POS',
        1,
        'Point of Sale system training.',
        ''
    ),
    (
        'Situational serving',
        1,
        'How to handle difficult situations with customers.',
        ''
    ),
    -- Day 2
    (
        'Food Knowledge',
        2,
        'A basic understanding of food safety and the menu.',
        ''
    ),
    (
        'Beverage Knowledge',
        2,
        'A basic understanding of the beverage menu.',
        ''
    ),
    (
        'POS',
        2,
        'Point of Sale system training.',
        ''
    ),
    (
        'Bar Sprits',
        2,
        'A review of the bar sprits.',
        ''
    ),
    (
        'Side Dishes',
        2,
        'What Dishes can come on the side, at what price.',
        ''
    ),
    (
        'Situational serving',
        2,
        'How to handle difficult situations with customers.',
        ''
    )

    --   SELECT * FROM TACourses
    --   Drop Table TACourses;

-- UPDATE tacourses
-- SET imagePath = 'image url'
-- WHERE courseId BETWEEN 1 AND 12;