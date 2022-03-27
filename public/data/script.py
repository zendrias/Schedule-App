from json import dump, load


def get_subjects() -> list:
    with open("subjectlist.json", "r") as f:
        subject_list = load(f)
        return [s["STVSUBJ_CODE"] for s in subject_list]


def main() -> None:
    courses = []

    for subject in get_subjects():
        with open(f"{subject}_courses.json", "r") as f:
            subject_courses = load(f)
            for course in subject_courses:
                courses.append(course)

    with open("courses.json", "w") as f:
        dump(sorted(courses, key=lambda c: c["COURSE_ID"]), f, indent=4)


if __name__ == "__main__":
    main()
