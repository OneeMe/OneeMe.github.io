(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{891:function(e,t,a){"use strict";a.r(t);var r=a(20),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("作为一名 iOS 工程师，cocoapods 是我们所不会陌生的。然而在我们的日常开发中，编写 cocoapods 的 Ruby 语言我们可能不甚了解，更不要说 Bundler 以及 RVM 了。因此，当我们遇到一些 Ruby 环境相关的问题时，可能完全不知道发生了什么。如果恰好你对这两个工具做了什么感到好奇，那么，在这篇文章中，我会尽量由浅入深的去说明 RVM / Bundler 的原理和作用，帮助大家对 Ruby 的环境管理有一个更加深入的理解。")]),e._v(" "),a("h2",{attrs:{id:"tldr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tldr"}},[e._v("#")]),e._v(" TLDR")]),e._v(" "),a("ul",[a("li",[e._v("使用 RVM 来安装 Ruby")]),e._v(" "),a("li",[a("code",[e._v("gem install rubygems-bundler && gem regenerate_binstubs")]),e._v(" 可以让你免去每次都要在 "),a("code",[e._v("pod install")]),e._v(" 之前添加 "),a("code",[e._v("bundle exec")]),e._v(" 的痛苦")])]),e._v(" "),a("h2",{attrs:{id:"ruby-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruby-测试"}},[e._v("#")]),e._v(" Ruby 测试")]),e._v(" "),a("p",[e._v("我们都知道，macOS 是自带 Ruby 的。也就是说，当我们拿到一台新的 MacBook Pro，进入系统，打开终端执行 "),a("code",[e._v("whereis ruby")]),e._v("，我们会得到 "),a("code",[e._v("/usr/bin/ruby")]),e._v(" 这样的结果。")]),e._v(" "),a("p",[e._v("在目前的 macOS 10.14 版本中，系统自带的 Ruby 版本为 2.3.7。")]),e._v(" "),a("h2",{attrs:{id:"为什么需要使用-rvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要使用-rvm"}},[e._v("#")]),e._v(" 为什么需要使用 RVM？")]),e._v(" "),a("p",[e._v("在没有安装 RVM 或者 rbenv 这样的工具以前，大家在执行 "),a("code",[e._v("gem install cococapods")]),e._v(" 这一行命令的时候一定会遇到这样的报错：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory\n")])])]),a("p",[e._v("为什么会出现这样的错误？因为 gem 作为 Ruby 默认的包管理器，会将所有下载的 gem 安装在某个特定的目录下，我们暂且称呼这个目录为 Gem Path ，对于系统的 Ruby 来说，这个目录就是 /Library/Ruby/Gems/2.3.0，这是一个需要启用 "),a("code",[e._v("sudo")]),e._v(" 才能写入的目录。这也就导致我们在每次 "),a("code",[e._v("gem install")]),e._v(" 的时候都需要在命令之前增加 "),a("code",[e._v("sudo")]),e._v(" 才能让命令正确执行。")]),e._v(" "),a("p",[e._v("为了解决这个问题，我们需要让 Gem Path 指向一个我们拥有写权限的目录。比较简单直接的办法就是我们利用 homebrew 去安装一个新的 Ruby。")]),e._v(" "),a("p",[e._v("似乎很完美，但有个问题：我们如何约束大家所有人都使用同样版本的 Ruby 呢？")]),e._v(" "),a("p",[e._v("答案是使用 Ruby 的版本管理工具。以 RVM 为例，当你安装 RVM 以后，你在命令行中执行的每一个 "),a("code",[e._v("cd")]),e._v(" 命令其实都被 RVM 所替换了。RVM 会在每一次切换目录后检查当前目录中是否有 .ruby-version 文件，如果有，就检查当前使用的 Ruby 是否是文件中指定的版本。如果不是，他会给出类似 "),a("code",[e._v("Required ruby-x.x.x is not installed")]),e._v(" 这样的警告。")]),e._v(" "),a("p",[e._v("在我司工程的早期阶段，我们除了使用 cocoapods，还需要使用 Ruby 编写一些打包和发布的脚本，而当时系统提供的 Ruby 版本还比较低（2.0.0），开发起来不太方便，而利用 RVM ，我们不仅可以方便的安装一个新版本的 Ruby，还可以利用 .ruby-version 来保证大家可以使用相同版本的 Ruby（尽管只是一个比较弱的约束）。")]),e._v(" "),a("p",[e._v("相信到这里，大家已经能够理解，在我们的项目中使用 RVM 是很有必要的。我们接下来看第二个问题：为什么要用 Bundler？")]),e._v(" "),a("h2",{attrs:{id:"为什么要使用-bundler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-bundler"}},[e._v("#")]),e._v(" 为什么要使用 Bundler？")]),e._v(" "),a("p",[e._v("为了回答这个问题，我们需要先把目光转向 gem，回顾一下 gem 诞生时要解决的问题。")]),e._v(" "),a("h3",{attrs:{id:"gem-所要解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gem-所要解决的问题"}},[e._v("#")]),e._v(" gem 所要解决的问题")]),e._v(" "),a("p",[e._v("在 Ruby 中，如果你想使用另外一个 Ruby 文件中的内容，你需要使用 "),a("code",[e._v("require")]),e._v(" 关键字来加载另外一个 Ruby 文件中的内容。"),a("code",[e._v("require")]),e._v(" 会在 Ruby 预设的 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 中去查找对应的文件。你可以通过执行 "),a("code",[e._v("ruby -e 'puts $LOAD_PATH'")]),e._v(" 来看看当前 Ruby 中的 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 都有什么内容。")]),e._v(" "),a("p",[e._v("例如如果你写了一个简单的 Ruby 脚本：")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'foo'")])]),e._v("\n")])])]),a("p",[e._v("当执行到 "),a("code",[e._v("require 'foo'")]),e._v(" 这一行时, Ruby 就会在 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 中出现的所有目录下去查找是否有一个叫做 foo.rb 的文件。如果有，就去加载这个文件的内容。如果在所有的 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 中都没有找到这样的一个文件，Ruby 解释器就会抛出异常。异常通常长这个样子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LoadError - cannot load such file -- foo\n")])])]),a("p",[e._v("在没有 gem 以前，如果你想用别人已经写好的 Ruby 脚本，就需要手动把这些脚本下载下来，放到 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 中的某个目录下，然后你才能在你的脚本中正确的使用别人的脚本文件。这样的代码分发过程是非常原始而繁琐的。")]),e._v(" "),a("p",[e._v("为了解决这个问题，gem 横空出世，提供了这样的一个脚本分发解决方案：")]),e._v(" "),a("ol",[a("li",[e._v("首先用 gemspec 来描述你即将分发的脚本的元信息")]),e._v(" "),a("li",[e._v("利用 gem 提供的命令，将脚本打包成一个 .gem 文件（.gem 实质就是一个 POSIX tar archive），然后上传到服务器")]),e._v(" "),a("li",[e._v("当有其他人想要使用你的脚本时，执行 "),a("code",[e._v("gem install")]),e._v(" 即可")])]),e._v(" "),a("p",[e._v("前面的内容很好理解，我们来着重看一下执行 "),a("code",[e._v("gem install")]),e._v(" 之后发生了什么。")]),e._v(" "),a("p",[a("code",[e._v("gem install")]),e._v(" 所做的事情其实很简单。但到此时 gem 还没有完全解决我们的问题："),a("code",[e._v("gem install")]),e._v(" 所安装的那些 gem 并不存在于 "),a("code",[e._v("$LAOD_PATH")]),e._v(" 中，我们的 Ruby 脚本还是无法正确的引用到他们。")]),e._v(" "),a("p",[e._v("为了解决这个问题，gem 在自己被安装后，就去修改了 Ruby 中 require 的实现，使得 require 在执行的时候，除了 "),a("code",[e._v("$LOAD_PATH")]),e._v("，还会在 Gems Install Path 中查找文件（你可以通过执行 "),a("code",[e._v("gem env | grep -A2 'GEM PATHS'")]),e._v(" 找到你的 gem 所安装的路径，GEMS INSTALL PATH 就在这个目录的 gems 子目录下）。")]),e._v(" "),a("p",[e._v("当 gem 在 GEMS INSTALL PATH 中找到对应文件后，就会把这个路径加入到 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 中，然后调用 Ruby 本来的 require。此时由于 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 中增加了新的路径，require 就可以正确的加载到你所安装的 gem 的对应文件了。")]),e._v(" "),a("p",[e._v("这里我们可以做一个小实验，找一个没有 Gemfile 的目录执行 irb，然后依次输入注释以外的内容：")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("old_load_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LOAD_PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dup\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cocoapods'")])]),e._v("\nnew_load_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LOAD_PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dup\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 执行下面的代码可以看看 LOAD_PATH 数量的变化")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"new: ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("#{")]),a("span",{pre:!0,attrs:{class:"token content"}},[e._v("new_load_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("count")]),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v(" old: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("#{")]),a("span",{pre:!0,attrs:{class:"token content"}},[e._v("old_load_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("count")]),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"')])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 执行下面的代码可以看看 LOAD_PATH 到底变了什么。你会看到 cocoapods 以及他的依赖库所在的目录")]),e._v("\nnew_load_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" old_load_path\n")])])]),a("p",[e._v("至此，gem 已经完美解决了分发 Ruby 脚本的问题。当你想要使用任何一个别人已经提供好的 gem 的时候，只需要简单输入 "),a("code",[e._v("gem install")]),e._v("，你的脚本就可以快乐的使用这个 gem 了。")]),e._v(" "),a("h3",{attrs:{id:"gem-所带来的新的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gem-所带来的新的问题"}},[e._v("#")]),e._v(" gem 所带来的新的问题")]),e._v(" "),a("p",[e._v("到目前为止，一切似乎很美好，但是随着 Ruby 应用于各种大型项目以后，Ruby 的开发者们发现了新的问题：当你的项目依赖了十几个 gem 后，新接手的人的配置环境时需要输入十几次 "),a("code",[e._v("gem install")]),e._v(" 才能正确的配置好环境。")]),e._v(" "),a("p",[e._v("这样的事情开发者们当然不能忍，于是他们开始使用各种脚本文件将这个过程简化，这些脚本可能叫做 setup.sh ，他们的内容一般是这样的：")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("gem install foo\ngem install bar\n")])])]),a("p",[e._v("在这里我们暂时可以称呼类似这种 setup.sh 文件为 Gem List 文件，因为他就是一个装满了所有你需要安装的 Gem 的 List 🤓🤓🤓。")]),e._v(" "),a("p",[e._v("当 Ruby 的开发者们解决了批量安装 gem 的问题以后，他们又发现了新的问题：多版本环境不隔离。")]),e._v(" "),a("p",[e._v("什么意思？我们来举个例子说明一下这个问题。")]),e._v(" "),a("p",[e._v("假如你是一名 Ruby 开发者，你维护着一个你的项目 A，在这个项目中你使用了 2.0.0 版本的 foo。一段时间后，你又开始接手维护另外一个项目 B，不幸的是，这个项目最开始使用的 foo 的版本是 3.0.0。于是令人头疼的事情发生了：当你配置好了项目 B 的环境以后，你的机器上就会同时存在两个版本的 foo 的 gem。同时你会发现，你的项目 A 跑不起来了，因为你在运行项目 A 时，gem 默认会去找多个版本中最新的版本，于是在项目 A 中你用到了 3.0.0 版本的 foo 而不是 2.0.0 版本。")]),e._v(" "),a("p",[e._v("于是各种有趣但无奈的事情发生了：你的项目在你本地可能好好的，但是在服务器上就是不对。你查了好几天，发现是因为服务器上的另外一个项目装了一个高版本的 gem，导致服务器上的环境根本没法跑你的项目。你痛苦，你绝望，但你又无能为力 🤬🤬🤬。")]),e._v(" "),a("p",[e._v("即便你只维护一个项目，由于你的 Gem List 文件中并没有指定 gem 的版本号，所以很有可能一周前利用这个 Gem List 文件安装出来的 gem 和一周后安装出来的完全不同。以至于很久以前 Ruby 开发者们都会开玩笑：“你好啊新人，这是一台新的电脑，我们希望你能花一周把项目的依赖配置好，如果一切顺利的话”")]),e._v(" "),a("h3",{attrs:{id:"bundler-的解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundler-的解决方案"}},[e._v("#")]),e._v(" Bundler 的解决方案")]),e._v(" "),a("p",[e._v("为了解决上面使用 gem 所产生的这些问题，Bundler 横空出世，提供给开发者两个救命一般的命令：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("bundle install")])]),e._v(" "),a("li",[a("code",[e._v("bundle exec")])])]),e._v(" "),a("p",[a("code",[e._v("bundle install")]),e._v(" 为我们提供了统一安装多个 gem 的便捷方式。在执行 "),a("code",[e._v("bundle install")]),e._v(" 后，Bundler 会将他所使用的 Gem List 文件 —— Gemfile 中声明的 gem 全部安装，同时将此次决议的最终版本号保存在 Gemfile.lock 中，保证不同时刻不同机器执行 "),a("code",[e._v("bundle install")]),e._v(" 能够安装同样版本的 gem。")]),e._v(" "),a("p",[a("code",[e._v("bundle exec")]),e._v(" 则替我们解决了多版本环境不隔离的问题。当你执行 "),a("code",[e._v("bundle exec")]),e._v(" 的时候，Bundler 会把 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 中不相干的那些 gem 的路径全都去掉，然后读取 Gemfile.lock 中的 gem 版本（如果没有 Gemfile.lock 会决议版本后创建一个 Gemfile.lock），保证 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 中只存在 Gemfile.lock 中已经固定版本的 gem 的路径。你可以执行一下下面两行代码，看看 "),a("code",[e._v("$LOAD_PATH")]),e._v(" 的区别：")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("bundle exec ruby "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("e "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'puts $LOAD_PATH'")])]),e._v("\nruby "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("e "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'puts $LOAD_PATH'")])]),e._v("\n")])])]),a("h3",{attrs:{id:"bundler-带来的新问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundler-带来的新问题"}},[e._v("#")]),e._v(" Bundler 带来的新问题")]),e._v(" "),a("p",[e._v("至此，Bundler 已经很好的解决了 gem 安装和环境隔离的问题了，但是 Bundler 也带来了新的麻烦：每次我们执行 Ruby 相关的命令之前都要重复的输入 "),a("code",[e._v("bundle exec")]),e._v(" 🤦🏻‍♂️🤦🏻‍♂️🤦🏻‍♂️。")]),e._v(" "),a("p",[e._v("还好 Ruby 的开发者们都很懒，他们开发了一个新的 gem —— "),a("a",{attrs:{href:"https://github.com/rvm/rubygems-Bundler",target:"_blank",rel:"noopener noreferrer"}},[e._v("rubygems-Bundler"),a("OutboundLink")],1),e._v(" 来解决这个问题。当你安装这个 gem 以后，只要执行一次 "),a("code",[e._v("gem regenerate_binstubs")]),e._v("，rubygems-Bundler 就会帮你在任何 gem 安装的命令行执行之前检查一下当前目录以及父目录是否存在 Gemfile。如果存在，就自动帮你的命令行之前加上 "),a("code",[e._v("bundle exec")]),e._v(" 再执行。完美的解决了这个问题。")]),e._v(" "),a("blockquote",[a("p",[e._v("小提示：1.11.0 以上版本的 RVM 在安装 Ruby 时，默认会安装 rubygems-Bundler。你可以通过 "),a("code",[e._v("gem list rubygems-Bundler")]),e._v(" 来检查自己是否安装了这个 gem。如果你用 homebrew 安装 Ruby，则不会享受到这个隐藏的福利。")])]),e._v(" "),a("h2",{attrs:{id:"扩展练习-来看看一些常见的报错-现在你知道发生了什么了么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展练习-来看看一些常见的报错-现在你知道发生了什么了么"}},[e._v("#")]),e._v(" 扩展练习：来看看一些常见的报错，现在你知道发生了什么了么？")]),e._v(" "),a("h3",{attrs:{id:"练习一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习一"}},[e._v("#")]),e._v(" 练习一")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LoadError - cannot load such file -- macho\n")])])]),a("h3",{attrs:{id:"练习二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习二"}},[e._v("#")]),e._v(" 练习二")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Could not find proper version of cocoapods (1.1.1) in any of the sources\nRun `bundle install` to install missing gems.\n")])])]),a("h3",{attrs:{id:"练习三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习三"}},[e._v("#")]),e._v(" 练习三")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Required ruby-2.3.7 is not installed.\nTo install do: 'rvm install \"ruby-2.3.7\"'\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/@Sudhagar/rbenv-how-it-works-e5a0e4fa6e76",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rbenv — How it works"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.mindfiresolutions.com/blog/2018/01/rbenv-vs-rvm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rbenv vs rvm"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://afterthoughtsoftware.com/posts/A-Ruby-workflow-with-RVM",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Ruby workflow with RVM and Bundler"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://Bundler.io/rationale.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bundler: The best way to manage a Ruby application's gems"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cloudcity.io/blog/2015/07/10/how-Bundler-works-a-history-of-ruby-dependency-management/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How Bundler Works: A History of Ruby Dependency Management"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://andre.arko.net/2017/11/16/a-history-of-bundles/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A History of Bundles: 2010 to 2017"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@connorstack/understanding-ruby-load-require-gems-Bundler-and-rails-autoloading-from-the-bottom-up-3b422902ca0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding ruby load, require, gems, Bundler and rails autoloading from the bottom up"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://andre.arko.net/2015/04/28/how-does-Bundler-work-anyway/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How does Bundler work, anyway?"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);