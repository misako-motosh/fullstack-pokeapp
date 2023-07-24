# Homework Repository Guidelines

## Branch Creation

To ensure that you are in the `main` branch before creating a new homework branch, execute `git branch --show-current` in your terminal.

If the output is not the `main` branch, execute `git checkout main` to go to the main branch.

Once in the main branch, execute the following commands below:

```bash
git branch hw-homework-name
git checkout hw-homework-name
```

Where `homework-name` is the name of the homework as specified in Moodle.

Once it is done, you can now work on your homework.

## Submissions

After working on your homework, you will need to do two things:

### Merge Request

After committing all the changes in your homework branch, execute `git push origin hw-homework-name`.

Then, Go to your GitLab account and create the merge request as instructed. 

(Important) Make sure that the merge request title is the same as the name of your homework branch.

### Moodle Submission

After successfully creating the merge request, ensure that the link to the overview page of the merge request is submitted to Moodle. 

By submitting it to Moodle, you are indicating that you are done with your work and it is ready for the reviewer to assess your work and provide feedback.

## Other Notes

### .gitignore

This repository contains a `.gitignore` file which **must not be deleted**. This file defines which files or folders will be ignored by Git (for example, `.DS_Store` config files for students using MacOS).