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

知识库的目的在于为所有人提供与 AdGuard 相关的包含各种主题的最新信息。但是事情总是在不断变化。有时一篇文章不再反映当前的情况了。新版本上市后并没有太多人关注每一条新信息并进行更新。

这就是我们将所有知识库内容都移至[GitHub](https://github.com/AdguardTeam/AdguardKnowledgeBase/)的原因。现在，实际上任何人都可以通过建议对现有或新文章进行编辑或翻译。对于那些不熟悉如何使用 GitHub 的人，我们将提供一份简短的手册。

<a name="suggest-change"></a>

## 如何建议更改？

首先，您需要一个GitHub帐户。如果您没有，请加入[https://github.com/join](https://github.com/join) 。现在已经解决了，您可以直接投入写作。浏览[此处](https://github.com/AdguardTeam/AdguardKnowledgeBase) 的文章列表，然后选择您要提出一些更改的任何文章。单击 “docs.en.md” 文件(如果您使用英语书写)，然后单击框架右上角的小铅笔图标。

在这里，您终于可以展示您所有的特长！使用任何对您合适的方式更改文章（请使用 [Markdown](https://github.com/LewisVo/Markdown-Tutorial)！），并提供简短说明和拉取请求名称（稍后会详细介绍）。然后单击“建议更改文件”。您将被传到另一个页面。此页面上将有不少任务，但是您所要做的就是单击带有“创建拉取请求”文本的绿色按钮。如果您想更多了解整个过程，在线上可以找到大量的 GitHub 教程。

那么，什么是拉取请求（或 PR）？简而言之，PR 是指向存储库作者/管理员传达的信息。其表示您做了很酷的编辑，因此值得被考虑添加。在我们的立场，很酷的事情是文章的更改。管理员将查看您的PR并进行审查。如果他们认为您的建议有效且合法，他们将予以批准。否则，他们还会拒绝 PR 或要求您在批准之前进行更改。具体流程，只需尝试一下，便不言自明。

<a name="new-article"></a>

## 写新文章

写一篇全新的文章是一项更加费力的工作。但是，如果您决定走这条路的话，请执行以下操作。首先，请确保您的文章在 AdGuard 知识库中“占有一席之地”。我的意思是，您写的文章应该与 AdGuard 产品有关，或者文章的内容要包括“元”信息 (此类“元文章”的示例是在知识库的[常见问题](https://kb.adguard.com/en)或这篇文章)。找到合适的主题后，转到[存储库](https://github.com/AdguardTeam/AdguardKnowledgeBase)。选择最合适的类别（例如，是 [Android — 解决问题](https://github.com/AdguardTeam/AdguardKnowledgeBase/tree/master/05.android/06.solving-problems)）。请按下屏幕右上方的“创建新文件”，之后为文件提名。考虑到您需要创建新文件夹（类似于此类别中的所有其他文件夹）。对于英文文章，文件本身应命名为 “docs.en.md”（中文文章可以写“docs.zh.md”）。

请注意，每个文件的顶部应有特定的标题：

```
---
title：“您的标题在这里”
taxonomy:
    category:
        - docs
visible: true
---
```
在下面输入文本 (请使用 [Markdown](https://github.com/LewisVo/Markdown-Tutorial)！)。然后单击“建议更改文件”以创建 PR。其余步骤与[上文](#suggest-change)中所述完全相同。

<a name="translator"></a>

## 翻译文章

[在这里](#new-article)也可找到关于撰写新文章的相关内容。主要的区别是，您应始终在与原始文件相同的文件夹中创建新文件，并相应地命名（例如 docs.es.md（西班牙语））。请使用英文原件来构建文章的结构，以消除许多可能的误解和不一致。

<a name="issues"></a>

## 处理未解决的问题

有时我们需要更新或补充现有的，或创建新的文章，但由于某些原因我们不能立即这样做。在这种情况下，通常会在 GitHub 上的特殊存储库中创建任务（“问题”）。您可以通过[此链接](https://github.com/AdguardTeam/AdguardKnowledgeBase/issues/)转到特定的页面。选择任何您认为有吸引力的问题并开始进行研究。如果您遇到问题，可以在评论中直接提问。

<a name="license"></a>

## 获得免费的AdGuard许可

我们的知识库是重要的信息来源。可让用户进一步了解 AdGuard。因此，我们总是很乐意为对 AdGuard 做出贡献的人提供免费 AdGuard 许可。

对于获得许可密钥需要投入多少时间和成本，我们没有严格的标准，但是如果您觉得自己的贡献已经够大了，只需向我们发送邮件至 [st@adguard.com](mailto:st@adguard.com) 即可。
