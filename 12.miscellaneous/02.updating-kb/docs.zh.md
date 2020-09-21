---
title: '更新知识库'
taxonomy:
    category:
        - docs
visible: true
---

* [简介](#introduction)
* [如何建议更改？](#suggest-change)
* [撰写新文章](#new-article)
* [翻译文章](#translator)
* [处理未解决的问题](#issues)
* [获得免费的AdGuard许可证](#license)

<a name="introduction"></a>

## 介绍

该知识库的目的是向所有人提供有关与AdGuard相关的各种主题的最新信息。但是事情总是在不断变化，有时一篇文章不再反映当前的情况了-我们中没有太多人关注每一个信息并在发布新版本时相应地进行更新。

这就是为什么我们将所有知识库内容都移至[GitHub](https://github.com/AdguardTeam/AdguardKnowledgeBase/)的原因。现在，实际上任何人都可以通过建议对现有文章进行编辑和翻译以及对新的文章进行翻译来做出贡献。对于那些不熟悉使用GitHub的原理的人，我们将提供一个简短的手册。

<a name="suggest-change"></a>

## 如何建议更改？

首先，您需要一个GitHub帐户。如果您没有，请加入[https://github.com/join](https://github.com/join)。现在已经解决了，您可以直接投入写作。浏览[此处](https://github.com/AdguardTeam/AdguardKnowledgeBase)的文章列表，然后选择您要提出一些更改的任何文章。单击“ docs.en.md”文件(如果您使用英语书写)，然后单击框架右上角的小铅笔图标。

在这里，您终于可以展示您所有特长！以您认为合适的任何方式更改文章 (使用[Markdown](https://github.com/LewisVo/Markdown-Tutorial)！)，并提供简短说明和名称，以供您即将使用的拉取请求(稍后会详细介绍)，然后单击建议更改文件。您将被带到另一个页面，该页面上似乎有很多事情正在进行，但是您所要做的基本上就是单击带有“创建拉取请求”文本的绿色按钮。如果您想更多地了解整个过程，可以在线找到大量的GitHub教程。

那么，什么是拉取请求(或PR)？简而言之，它向存储库作者/管理员传达了一条信息，即您做了一些很酷的事情，至少值得考虑添加。在我们的案例中，此内容是对文章的更改。管理员将看到您的PR并进行审查，如果他们认为您的建议合法有效，他们将予以批准。否则，他们可能会拒绝PR或要求您在批准之前进行更改。只需尝试一下，一试便是非常不言自明和直观的。

<a name="new-article"></a>

## 写新文章

写一篇全新的文章是一项更加费力的工作。但是，如果您决定走这条路，请执行以下操作。首先，请确保您的文章在AdGuard知识库中占有一席之地。它应该以某种方式与其中一种AdGuard产品相关，或者应该是“元”(此类“元文章”的示例是[一般性问题](https://kb.adguard.com/en) )的文章，或者这一篇。现在，找到合适的主题后，转到[存储库](https://github.com/AdguardTeam/AdguardKnowledgeBase)，然后转到最合适的类别(例如，假设它是[Android-解决问题](https://github.com/AdguardTeam/AdguardKnowledgeBase/tree/master/05.android/06.solving-problems))。按下屏幕右上方的“创建新文件”按钮，然后为文件命名。考虑到您需要创建一个新文件夹(类似于此类别中的所有其他文件夹)。对于英文文章，文件本身应始终命名为“ docs.en.md”。

请注意，每个文件的顶部应有一个特定的标题：

```
---
title：“您的标题在这里”
taxonomy:
    category:
        - docs
visible: true
---
```
在下面输入其余文本 (使用[Markdown](https://github.com/LewisVo/Markdown-Tutorial)！)，然后单击建议更改文件以创建PR。其余内容与[上文](#suggest-change)中所述完全相同。

<a name="translator"></a>

## 翻译文章

这部分很棘手。当前，我们的知识库仅支持英语和俄语，但是我们可以预见未来会有更多选择。您可以通过建议对现有文章的翻译来帮助我们奠定未来的基础。关于[撰写新文章](#new-article)的所有说明也适用于此，主要区别是您应始终在与原始文件相同的文件夹中创建新文件，并相应地命名(例如`docs.es.md`(西班牙语)。使用英文原件的原始文本来复制文章的结构，这将消除许多可能的误解和不一致之处。

<a name="issues"></a>

## 处理未解决的问题

有时需要更新或补充现有文章，或创建新文章，但由于某些原因我们不能立即这样做。在这种情况下，通常会在GitHub上的特殊存储库中创建任务(“问题”)。您可以通过[此链接](https://github.com/AdguardTeam/AdguardKnowledgeBase/issues/)到达那里，选择您认为有吸引力的任何问题并开始进行研究。如果您有任何问题，可以在该期的评论中直接提出。

<a name="license"></a>

## 获得免费的AdGuard许可

我们的知识库是重要的信息来源，可让人们进一步了解AdGuard。因此，我们总是很高兴为对AdGuard内容做出贡献的人提供免费AdGuard许可。

对于获得许可证密钥需要投入多少时间和成本，我们没有严格的标准，但是如果您觉得自己已经做够了，只需向我们发送邮件至[st@adguard.com](mailto:st@adguard.com)。
