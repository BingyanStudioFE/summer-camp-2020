# 常见用法
## git commit
`git commit -m "本次提交描述"`  
该命令会将git add .存入暂存区修改内容提交至本地仓库中，若文件未添加至暂存区，则提交时不会提交任何修改.  
`git commit -a`  
相当于运行 git add -u把所有当前目录下的文件加入缓存区域再运行git commit.
注意！对于新增的文件，并没有被commit  
`git commit -am/-a-m`  
等同于上面的-a和-m  
`git commit --amend`  
修改最近一次提交。有时候如果提交注释书写有误或者漏提文件，可以使用此命令。对于漏提交的文件，需要git add到缓存区之后，git commit --amend才能将修改追加到最近的一次提交上。  
## git stash
`git stash`  
所有未提交的修改都保存起来，用于后续恢复当前工作目录  
`git stash save "stash_name"`  
给每个stash加一个message，用于记录版本  
`git stash pop/git stash apply`    
恢复最新缓存的工作目录（第一个），并删除缓存堆栈中的那一个stash删除(pop), apply则只恢复不删除  
`git stash list`    
查看现有所有stash
在使用git stash pop(apply)命令时可以通过名字指定使用哪个stash，默认使用最近的stash（即stash@{0}）  
`git stash drop`    
移除最新的stash，后面也可以跟指定stash的名字  
## git reset
`git reset -- hard [指针位置]`  
- 删除操作已经提交到本地库：指针位置指向历史位置  
- 删除操作尚未提交到本地库：指针位置用HEAD  

`git reset HEAD^/~n`  
回退版本，一个^表示一个版本，可以多个，另外也可以使用 git reset HEAD~n这种形式。
也可以回退到指定版本：
`git reset commit -id`  
## git diff  
- 将工作区的文件与暂存区进行比较  
`git diff[文件名]`  

- 将工作区中的文件与本地库开始记录比较  
`git diff[本地库中的历史记录][文件名]`  

- 不带文件名可以比较多个文件  



## git reflog  
`git reflog  `
可以查看所有分支的所有操作记录（包括commit和reset的操作），包括已经被删除的commit记录，git log则不能察看已经删除了的commit记录
想要回退到只需要  
`git reset -- hard 版本号`
## git add
`git add -A`保存所有修改  
`git add .`保存新的添加和修改，但是不包括删除  
`git add -u`保存修改和删除，不包括新建文件  
## git checkout
### git checkout切换分支
`$ git checkout -b newBranchName
Switched to a new branch ‘newBranchName’`

这相当于执行下面这两条命令：  
`git branch newBranchName
git checkout newBranchName(工作区一定要是clean的)`  

`$ git checkout -b newBranchName remote_branch_name`   
拉取远程分支remote_branch_name创建一个本地分支newBranchName，并切到本地分支newBranchName，采用此种方法建立的本地分支会和远程分支建立映射关系。
### git checkout回退修改
`git checkout – fileName`  
这条命令把fileName从当前HEAD中检出，也就是回退当前工作区的这个文件的修改
–可以省略不写

如果需要回退工作区的全部文件修改，可以使用：
`git checkout --hard HEAD`  
## reset,checkout,revert总结
|命令 | 作用域 | 常用情景|
|---- | ---|---|
|git reset | 提交层面 | 在私有分支上舍弃一些没有提交的更改|
|git reset| 文件层面 | 将文件从缓存区中移除|
|git checkout| 提交层面| 切换分支或查看旧版本|
|git checkout| 文件层面| 舍弃工作目录中的更改|
|git revert| 提交层面| 在公共分支上回滚更改|
|git revert| 文件层面| （无）|  
## 分支操作
- 创建分支  
`git branch[分支名]`  
- 查看分支  
`git branch -v ` 
- 切换分支  
`git checkout [分支名]  `
- 合并分支  
先切换接受修改的分支`git checkout master`，执行merge命令`git merge hoy_fix`  
- 解决冲突  
编辑文件，add，commit（*不能带文件名*）  

## 删除分支  

`$ git branch -d branchName
或者， git branch -D branchName`  

删除分支（不管它有没有merge）
前提是先要切换到其他分支
## git clone address  
- 完整吧远程库下载到本地
- 创建origin别名
- 初始化本地库

## git push
git push命令用于将本地分支的更新，推送到远程主机.  

`git push origin(远程主机名) master（本地分支名`   
`git push origin :master`相等于`git push origin -- delete master`  

如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。  

上面命令表示删除origin主机的master分支。如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。

`git push origin`  
上面命令表示，将当前分支推送到origin主机的对应分支。如果当前分支只有一个追踪分支，那么主机名都可以省略。

`git push`  
如果当前分支只有一个追踪分支，那么主机名都可以省略。

`gitpush -u origin master`  
上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。

`$ git push origin HEAD`  
将当前分支推送到远程的同名的简单方法

`$ git push origin HEAD:master`  
将当前分支推送到源存储库中的远程引用匹配主机。 这种形式方便推送当前分支，而不考虑其本地名称。
## git pull=fetch+merge
`$ git pull <远程主机名> <远程分支名>:<本地分支名>`    

git pull命令用于从另一个存储库或本地分支获取并集成(整合)。git pull命令的作用是：取回远程主机某个分支的更新，再与本地的指定分支合并，  
 
`$ git pull origin master:test`  
要取回origin主机的master分支，与本地的test分支合并

`$ git pull origin master`  
如果远程分支(master)要与当前分支合并，则冒号后面的部分可以省略
## 解决远程冲突  
如果不是基于github最新版所做的修改，不能推送，必须先拉取  
拉取后会进入冲突状态，测按照分支冲突操作  

[常用命令](https://blog.csdn.net/u012556150/article/details/50736896?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.compare&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.compare)