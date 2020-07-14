##  Git&Github使用笔记

### Git简介

最初为管理linux源代码而建的分布式管理系统；

在这之前，CVS/SVN都为集中式版本控制系统，通过中央服务器控制，容错小，操作麻烦；

相交之下，使用git，项目中的每位工程师都有完整的库，容错高，且具有强大的分支管理。

一张图看懂git工作流程：

<img src="http://www.yiibai.com/uploads/images/201707/0707/497150749_38351.png" alt="img" style="zoom: 67%;" />

### Git使用

#### 本地操作

1.安装之后，首先初始化git:

	$git config --global user.name "my name"
	$git config --global user.email "emailaddress@xxx.com"

*填写用户信息*

2.Create Repository

	$mkdir learngit        		//创建文件夹
	$cd learngit           		//打开文件夹
	$pwd                   		//显示当前目录
	
	$git init              		//将目录变成git可管理的库
	$ls -ah                		//可以看到.git目录（用于跟踪管理版本库）
	
	$git add readme.md     		//文件添加到仓库，可以多次add
	//$git add --all      		//批量操作   
	$git commit -m 'add comment'//文件提交至仓库，一次性可提交多个（相当于快照存档）

3.Time Machine

	$git status 				 //查看当前仓库状态
	$git diff    				 //查看做了哪些修改
	$git log  					 //查看提交日志
	$git log --pretty=oneline    //简洁版日志
	$git reset --hard HEAD^      //回退到之前版本
	$git reset --hard 1094a		 //根据commit id再折腾回去
	$git reflog					 //记录了每一次命令

 *head是一个指向当前版本的指针，改编 head可使我们在历史版本中穿梭*

*穿梭前，用 git log查看提交历史；重回未来，用 git reflog查看命令历史*

4.工作区和版本库

![git-repo](https://www.liaoxuefeng.com/files/attachments/919020037470528/0)

*工作区：我的修改*

*stage：显示add后的变化*

*master：显示commit后的变化*

	$git reset HEAD <filename>   //将暂存区修改撤回到工作区
	$git checkout -- filename    //丢弃工作区修改，返回最近一次工作状态stage/master

5.删除

	$rm <filename>
	$git commit -m 'remove file'//我就要删除
	$git checkout --filename    //我反悔了

*不加到版本库里的东西是回不来的！*

#### 远程仓库

1.添加远程库

SSH Key可以确保你的GitHub和git是同一个人提交的

获取ssh key操作

	$ssh-key -t rsa -C "yourmail@example.com"

之后向对应文件夹寻找，cv到github的设置中。ok~

2.关联远程库

	在github创建空项目后
	$git remote add oriigin git@github.com:username/repositoryname.git
	$git push -u origin master   //参数-u将本地master分支和远程master分支关联起来，以后使用可以省略

*在第一次使用时遇到了fatal: Could not read from remote repository.的问题*

*原因是因为初始化git且没有进到想要提交的目录就开始push*

*当远程库中的文件和本地的重复且不统一时，先将远程pull下来，加参数--allow-unrelated-histories*

*要是还不行 就强行git push origin master -f*

3.克隆远程库

	$git clone git@github.com:.../....git          //use html/ssh

#### 分支

1.创建与合并分支

主分支master，指向最新的提交；

head指向master，确定当前分支以及当前分支的提交点；

新建分支dev，head指向dev；

合并分支，master指向dev，head指向master;

<img src="https://www.liaoxuefeng.com/files/attachments/919022412005504/0" alt="git-br-ff-merge" style="zoom:50%;" />

	$git checkout -b dev		//-b 表示创建并切换 相当于
	$git branch dev
	$git checkout dev			//创建并切换到新分支,分支工作完成后，仍用该条语句切换至master
								与撤销修改 --<file>相同，令人迷惑，使用switch更好
	$git switch master			//切换到已有的分支
	$git switch -c dev			//新建并切换到新的分支
	$git branch					//查看当前分支
	$git merge dev				//将指定分支合并到当前分支
	$git branch -d dev			//删除分支

2.解决冲突

* 冲突为什么会产生？

<img src="https://www.liaoxuefeng.com/files/attachments/919023000423040/0" alt="git-br-feature1" style="zoom:50%;" />

​	此时无法merge；通过git status找到冲突文件，手动解决冲突；

```
Git tracks changes of files.
<<<<<<< HEAD
Creating a new branch is quick & simple.
=======
Creating a new branch is quick AND simple.
>>>>>>> feature1
```

可以看到`<<<<<`,`=====`,`>>>>>`为冲突的内容，修改后即可成功提交；

3.分支管理策略

通常合并分支的时候，git使用`Fast Forward`模式，删除分支后分支信息丢失；

禁用ff后，git会在merge时产生新commit，可以看到分支历史。

```
$ git merge --no-ff -m "merge with no-ff" dev             //no-ff
$ git log --graph --pretty=oneline --abbrev-commit        //图表显示
```

4.Bug分支

TaskA进行中但未commit时需要转到TaskB，这时需要用到

	$git stash 							//储存工作现场
	$git checkout dev               	//转入TaskB，fix bug101
	$git switch	master					//返回branch 1继续工作
	$git stash list						//查看工作现场储存情况
	$git stash aplly					//恢复之后还需drop删除stash内容
	$git stash pop						//恢复同时删除stash
	//dev是从master中分支出来的，所以dev上也有master的bug，复制bug101的修改到dev上￥
	$git cherry-pick <commit>           //修复当前分支上的bug

5.Feature分支

与bug分支类似，强行删除用参数-D

6.多人协作

##### 推送分支

- 查看远程库信息，使用`git remote -v`；
- 本地新建的分支如果不推送到远程，对其他人就是不可见的；
- 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；
##### 抓取分支

- 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；

- 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；

- `git push origin branch-name `将修改好的分支推送到远程

- 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

- gitpull失败的原因时没有指定本地dev分支与远程origin/dev分支的链接

  `$git branch --set-upstream-to=origin/dev dev`

  接下来解决的方法和分支管理中的一样
#### 标签管理

- `git tag xxx`创建轻量标签
- `git tag -a v1.0 -m 'abc'`创建附注标签
- `git tag`显示已有标签
- `git tag show v1.0 `只显示标签的提交信息
- `git push origin --tags`一次性推送标签到远程
- `git tag -d v1.0`删除本地文件
- `git push origin:refs/tags/v1.0`先删除本地，再从远程删除