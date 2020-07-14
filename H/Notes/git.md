![git1](\pics\git1.png )
![git2](\pics\git2.png )
>win+r，输入cmd或者在文件夹路径输入cmd均可打开命令行面版   

`git init` 初始化  
`git status` 查看仓库状态  
`git diff`      查看尚未暂存的文件更新了哪些部分（比较的是工作目录(Working tree)和暂存区域快照(index)之间的差异）

`git add.`    添加全部文件到暂存区  
`git commit -m "description(e.g. commit abc.txt files)" ` 提交文件（默认到master分支内）  
***
>注：github是git服务器，不是远程仓库，我们在服务器上构建自己的远程仓库。公司内部可构建自己的服务器。   

`git remote add origin 地址 `手动连接（origin是自己起的远程仓库名称）  
`git remote -v ` 查看与远端的连接情况  
`git push origin master`  （master是默认分支)把本地分支全传到远程上，然后输入账号密码即可  
`git pull origin master` 拉取更新内容  
`git clone 地址`    从远程仓库复制内容。注，复制后自动连接，不用再手动连接  


`cd xxx`          进入到xxx目录下（若切换cde盘直接输入d:）  
`cd ..`              返回上一级目录  
`cd / `     	    返回根目录  
`cd 绝对路径` 进入绝对路径下  
***
> 分支是Git中的核心概念，整个GitHub流程都以此为基础  
>GitHub流程包含六个步骤，每个步骤在实施时都有不同的优势：创建分支-添加提交-提出拉动请求-讨论和审查代码-合并-部署
> 分支，是一个个版本的最终存储位置。主分支master一般存放稳定版本  

![git3](\pics\git3.png )
`git branch` 查看目前分支  
`git branch xxx` 创造新分支  
`git checkout 分支名` 转换到分支“分支名”上  
`git log --oneline` 查看当前分支简易日志（时间点按倒序排列）  
`git log` 查看当前分支完整日志  
`git merge xxx`   
【快速合并】把xxx分支合并到当前分支上（前提：主分支后面没动，这个条件由git自动判断；实质是把主分支的指针挪到最新的分支结点上）  
【三方合并】合并两个分支的操作并形成新的提交点
![git4](\pics\git4.png )
![git5](\pics\git5.png )
![git6](\pics\git6.png )