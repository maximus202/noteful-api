CREATE TABLE notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    note_title TEXT NOT NULL,
    content TEXT,
    folder_id INTEGER REFERENCES folders(id)
)