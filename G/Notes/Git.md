# 1.Git的基本操作

- ```
  git init
  ```

   初始化一个Git仓库（会在仓库根目录生成一个不可见的.git目录）

- ```
  git add <file>
  ```

  将文件添加进暂存区

- ```
  git commit -m "简要说明"
  ```

  将暂存区的文件添加进版本库。-m参数表示可以直接输入"简要说明"

  ```
  git commit -a -m "简要说明"
  ```

  -a使文件不经过git add添加暂存区，直接添加进版本库

- ```
  git clone url <directory>
  ```

  不加directory则克隆至当前目录下

- ```
  git status
  ```

  当前仓库状态。是否有新增文件，修改文件等

- ```
  git diff
  ```

  查看文件修改内容

- ```
  git checkout -- <file>
  ```

  撤销工作区文件的修改。将工作区修改的文件还原至暂存区的版本，若暂存区中不存在则还原至版本库中的版本

- ```
  git reset HEAD <file>
  ```

  撤销暂存区文件的修改，退回工作区

  ```
  git reset --hard HEAD^
  ```

  回退至上一个版本，回退较多可以HEAD~number，或是换成commit_id

- ```
  git rm <file>
  ```

  从Git中移除文件

  最后要执行git commit才真正提交到git仓库

# 2.分支

- ```
  git checkout -b <name>
  ```

  ```
  git switch -c <name>
  ```

  -b与-c表示创建并切换至新的分支，不加则只表示切换

- ```
  git branch
  ```

  查看分支，会列出所有分支，当前分支前有*

  ```
  git branch <name>
  ```

  创建分支

  ```
  git branch -d <name>
  ```

  删除分支

  -D强行删除

- ```
  git merge <name>
  ```

  将指定分支合并到master分支

- ```
  git stash
  ```

  暂时储存当前工作

  ```
  git stash apply
  ```

  恢复之前储存的工作

  ```
  git stash drop
  ```

  删除stash内容

  ```
  git stash pop
  ```

  恢复并删除

- ```
  git cherry-pick commit_id
  ```

  将bug的修复合并到当前分支

- ```
  git push origin <branch-name>
  ```

  push修改

- ```
  git remote -v
  ```

  查看远程库信息，-v表示详细信息

- ```
  git pull
  ```

  有冲突时，从远程抓取分支修改冲突