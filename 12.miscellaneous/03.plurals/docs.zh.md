---
title: 复数形式
taxonomy:
    category:
        - docs
visible: true
---

* [简介](#intro)
* [复数形式是什么意思？](#plurals)
* [在哪里可以了解复数形式的数量？](#where-to-learn)
* [AdGuard翻译中的复数](#translations)
    * [具有单数，双数，复数键的字符串](#1type)
    * [用逗号分隔的多个单词形式](#2type)
    * [Crowdin支持的模式](#3type)
    * [带模板的字符串](#4type)
* [简短摘要](#summary)

<a name="intro"></a>

## 介绍

众所周知，世界上的语言之间存在很多差异。这些差异之一是使用复数形式，在本地化问题上可能会造成巨大困难。

因此，我们强烈建议您正确阅读本文，以详细了解复数形式以及如何在AdGuard转换中使用它们。

<a name="plurals"></a>

## 复数形式是什么意思？

不同语言的名词可以有几种复数词形式。它们的用法取决于单词前面的特定数字，以指示该单词表示的项目数。

例如，当谈论不同数量的事物时，英语单词有两种词形式，例如*'one star'*或*'two star'*。无论您说的是五颗星，二十六颗星还是五百三十二颗星，结尾的“ s”都将保持不变。之所以会发生这种情况，是因为英语名词只有两种复数形式，即单数形式和复数形式。

但是某些语言只能包含一种形式，反之则可以包含更多种形式。

与英语相反，波兰语具有三种复数形式的名词。在谈论单数形式时使用一种形式，在复数形式中使用另一种形式，但数字以2-4结尾，但不包括12-14，第三种形式-前面带有其他数字的单词。

让我们来看看这张照片。在这里，您可以看到一组数字，这些数字决定了站在单词前面的单词形式。

！[](Polish.png)

>在[此处](https://developer.mozilla.org/zh-CN/docs/Mozilla/Localization/Localization_and_Plurals)查找其他示例。

让我们在英语和波兰语之间做一个小比较，以便更好地理解:

      英文版：波兰语等效：

      1. form - It takes one hour.                                     1. form - Zajmuje to godzinę. 
      2. form - It takes two hours.                                    2. form - Zajmuje to dwie godziny. 
      2. form - It takes five hours.                                   3. form - Zajmuje to pięć godzin.
      
现在很明显，波兰语*(godzinę'*)(小时)具有三种不同的形式，而英语单词仅将给定数字更改其形式两次。

除波兰语外，还有许多其他语言具有三种复数形式，包括俄语，塞尔维亚语，斯洛伐克语，捷克语等。但并非所有语言都遵循相同的规则。这就是为什么了解您的语言包含多少种复数形式以及如何应用它们如此重要的原因。

<a name="where-to-learn"></a>

## 在哪里可以了解复数形式的数量？

当您面对需要使用复数形式的翻译时，您可能无法立即意识到一种或另一种语言提供了多少个单词形式。幸运的是，有很多信息来源，下面列出了其中一些。

首先，我们建议您参考Mozilla的[本地化和复数](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals)文章中的信息。在这里，您会发现不同的复数形式规则以及遵循这些规则的语言。

但是，尽管这篇文章(或至少应该是)内容丰富且易于理解，但并未包含世界语言的完整列表。因此，我们还建议您转到[本地化指南](http://docs.translatehouse.org/projects/localization-guide/zh-CN/latest/l10n/pluralforms.html)，该手册中列出了更多的语言，但以另一种方式。不同语言的复数形式的数量以这种方式显示：“ nplurals = 2”，“ nplurals = 4”，依此类推。等号“ =”后的数字表示相应语言的多种形式。此外，在这里您可以看到不同的公式，这些公式可以帮助您确定每种情况下要使用的格式。

此外，您还可以在[Unicode通用语言环境数据存储库](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules)(CLDR)中获取有关复数形式的信息。 CLDR复数规则表示十进制数字(1.5; 2.3; 100.1…)的其他字词形式，但我们在AdGuard翻译中不使用它们。

<a name="translations"></a>

## AdGuard翻译中的复数形式

首先，您需要了解，并非每个AdGuard译文都需要使用复数形式。

当前，我们在Crowdin上有4种类型的字符串，涉及使用复数形式。

让我们仔细看看它们。

<a name="1type"></a>
#### 1. **带有以.singular，.dual，.plural结尾的字符串键的短语**

！[crowdin](https://cdn.adguard.com/public/Adguard/kb/zh/plurals/dual_it.png)

其中大多数位于“ AdGuard for Windows”项目中，仅包含一个或两个词：

- `days;`
- `extensions;`
- `hours`

在Crowdin上遇到此类短语时，请注意字符串键，在“上下文”字段中您会看到一些关于复数的重要说明。

<a name="2type"></a>
#### 2. **具有单数和复数名词的字符串，以逗号分隔**

这种字符串主要集中在“ AdGuard for Android”项目中。

请看示例：

！[crowdin](https://cdn.adguard.com/public/Adguard/kb/zh/plurals/android_fr.png)

如果您的语言中有3种名词的复数形式(如波兰语)，请用逗号分隔所有复数形式。

`hour, hours --> godzinę, godziny, godzin`

如果一个名词只有两种形式，则无需重复写同一形式(*通常仅适用于这种带有复数形式的字符串！*)。但是，如果您重复两次该表格将不会出错。

<a name="3type"></a>
#### 3. **使用Crowdin开发的模式的字符串**

这是对字符串进行复数转换的最用户友好的方案。

Crowdin建议用户，他们用不同的复数形式翻译一定数量的短语。

如果您的语言仅提供一种复数形式，则您只会看到一个要翻译的短语。如果您使用三种形式，Crowdin将为您提供分为其他两到三个字符串的字符串以进行翻译。

例如：

！[crowdin](https://cdn.adguard.com/public/Adguard/kb/zh/plurals/crowdin_scheme.png)

在翻译和批准这些字符串时，请注意。如果您不知道“其他”字段的含义，则只需粘贴与“许多”字段中相同的表单即可。 “许多”和“其他”字段的内容可以相同。

<a name="4type"></a>
#### 4. **带有用竖线分隔的模板的字符串**

这是最复杂的AdGuard字符串类型，通常在“ AdGuard网站”项目(即“ adguard.com”文件夹中)中使用。

请密切注意句子与原始短语中的**％count％**占位符之间的竖线符号–这将帮助您识别需要翻译使用复数形式的短语。

！[crowdin](https://cdn.adguard.com/public/Adguard/kb/zh/plurals/plurals_site.png)

现在，让我们想象一下-您将面临这样的短语：*“％count％计算机的标准许可证|％count％计算机的标准许可证” *。

您应该知道正确翻译什么？

我们称这些句子用竖线符号***称为“模板” ***，因为实际上它们用作具有不同数字的短语的模板。

回到示例，由于英语仅包含两种复数形式，因此应分别有两个模板：

`***％count％*计算机的标准许可| *％count％*计算机的标准许可**`

其中**模板1 ** – *％count％*计算机的标准许可，

和** template 2 ** – *％count％*计算机的标准许可

您应注意的另一重要事项是**％count％**占位符，它们通常像在它们定义的单词之前一样出现。根据选择的模板，此处将显示不同的数字，而不是**％count％**。

在另一种语言具有三种复数形式的情况下，应该有三个模板，它们之间有两个竖线符号。

例如，根据[本地化和复数](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals)文章的规则，我们希望将上述短语翻译成斯洛伐克文具有三种复数形式的单词，可与以下数字配合使用：

！[](Slovak.png)

那么从英语到斯洛伐克语的翻译应该是：

`**tandartnálicencia pre *％count％*počítač|Štandartnálicencia pre *％count％*počítače|Štandartnálicencia pre *％count％*počítačov**`

在这种情况下，我们看到三个模板，其中包含斯洛伐克语中“ *počítač” *(计算机)三个复数形式。

**如果我们忽略其中一种形式，而只为斯洛伐克语使用两个模板，而不是三个，则系统将无法为某些数字采用适当的模板**，结果，句子中将出现语法错误，例如英语：* 5台计算机的标准许可*。

但是在某些语言中，可能有一些单词(简称为排除词)的复数形式少于语言本身。这可能会引起一些混乱。

例如，塞尔维亚单词*'računar'*(计算机)只有两种形式：*'računar'*-代表1、21、31(以及其他以1结尾的数字，不包括11)计算机和*'računara'* -用于其他数量的计算机。但是尽管如此，但根据一般规则(说明塞尔维亚语中的单词有三种复数形式)，AdGuard翻译中应该有三个模板：

！[](Serbian.png)

因此，从英语到塞尔维亚语的翻译应该是：

`** Standardna licenca za *％count％*računar| Standardna licenca za *％count％*računara| Standardna licenca za *％count％*računara**`

尽管很明显，最后两个模板没有区别，但保持规则非常重要：***模板的数量应反映相应语言的复数形式！***(通常针对这种类型的带复数的字符串)。

<a name="summary"></a>

## 简短的摘要

在翻译AdGuard项目时，请密切注意需要使用复数形式的短语。

尽管前三种类型的弦乐或多或少容易执行，但第四类要求更高的警惕性。

再说一次：如果您遇到包含两个重要元素的原始词组：**竖线符号**和**％count％**占位符，请执行以下操作：

+指翻译成一种语言的复数规则；

+保留确切数量的模板；

>即使在某些单词本身具有较少形式的情况下，模板的数量也应与语言所包含的复数形式的数量相一致。两种复数形式–翻译中的两个模板；五个复数形式–五个模板等

+不要忘记在模板之间使用竖线符号，在模板前后没有任何空格(例外：在原始短语中带有空格的字符串)；

+请勿翻译，填写或删除**％count％**占位符。

通过遵循这些简单的规则，您将帮助AdGuard开发人员避免本地化过程中的许多不必要的复杂情况。谢谢！
