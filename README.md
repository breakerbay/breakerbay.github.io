# Create an Empty Branch

Followed https://gist.github.com/blattmann/4bc90557c2bc2907e715f45ec35674a2 to create an empty branch

Replace empty-branch with your desired branch name.

git checkout --orphan empty-branch

Then you can remove all the files you'll have in the staging area (so that they don't get committed):

git rm -rf .

At this point you have an empty branch, on your machine.

Before you can push to GitHub (or any other Git repository), you will need at least one commit, even if it does not have any content on it (i.e. empty commit), as you cannot push an empty branch

git commit --allow-empty -m "root commit"

Finally, push it to the remote, and crack open a beer :)

git push origin empty-branch
