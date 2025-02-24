# Etch-A-Sketch project

The goal is to create responsive Etch-A-Sketch game using:
React,
HTML,
CSS,
React,
JS.

------

To Work with a New Branch and Merge Changes
Step 7: Create a New Branch:
Before starting work on a new feature or bug fix, create a new branch:
git checkout -b feature/my-new-feature

Step 8: Make Changes and Commit:
git add .
git commit -m "Added new feature or made changes"

Step 9: Push the Branch to the Remote Repository:
git push -u origin feature/my-new-feature
Why: Shares your branch with the remote repository, allowing collaboration or a backup.

Step 10: Merge the Branch into main:
git checkout main

Pull the latest changes to ensure you’re up to date:
git pull origin main

Merge the feature branch into main:
git merge feature/my-new-feature

Push the updated main branch to the remote repository:
git push origin main

Optional Step 11: Delete the Merged Branch
After the branch has been merged successfully, delete it locally and remotely to keep your repository clean:

git branch -d feature/my-new-feature # Deletes locally
git push origin --delete feature/my-new-feature # Deletes remotely

check