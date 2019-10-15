---
title: Plural forms
taxonomy:
    category:
        - docs
visible: true
---

* [Introduction](#intro)
* [What do plural forms mean?](#plurals)
* [Where can you learn about the number of plural forms?](#where-to-learn)
* [Plurals in AdGuard translations](#translations)
    * [Strings with `singular`, `dual`, `plural` keys](#1type)
    * [Plural word forms separated by commas](#2type)
    * [Crowdin supported patterns](#3type)
    * [Strings with templates](#4type)
* [Short summary](#summary)

<a name="intro"></a>

## Introduction

It is no secret, that there are a lot of differences between the world’s languages. One of these differences is the use of plural forms that can cause huge difficulties when it comes to localization issue. 

We strongly recommend you to properly read this article to learn more about plural forms and how they are being used in AdGuard translations. 

<a name="plurals"></a>

## What do plural forms mean?

Nouns in different languages can have several plural word forms. Their usage depends on the specific number that goes before the word to indicate the number of items expressed by the word. 

For instance, English words have two word forms when speaking about something in different numbers, like *'one star'* or *'two stars'*. It doesn’t matter if you say five, twenty-six or even five hundred thirty-two stars – the ending 's' will remain the same. And it happens because the English nouns have only two plural forms – for the singular number and for the plural one. 

But some languages can contain only one or, conversely, many more plural forms. 

In contrast to English, the Polish language has three plural forms of nouns. One of them is used when speaking about something in the Singular, another form is used in the Plural but with numbers ending in 2-4, excluding 12-14, and the third form – for words with other numbers in front of them.

Let’s have a look at this picture. Here you can see the groups of numerals which determine a word form when standing in front of it.  

![](Polish.png)

>Find other examples [here](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals).

Let’s draw a small parallel between English and Polish for better understanding: 

      The English version:                                                 The Polish equivalents:

      1. form - It takes one hour.                                     1. form - Zajmuje to godzinę. 
      2. form - It takes two hours.                                    2. form - Zajmuje to dwie godziny. 
      2. form - It takes five hours.                                   3. form - Zajmuje to pięć godzin.
      
Now it is clear that the Polish *'godzinę'* (hour) has three different forms, whereas the English word changes its form with given numbers only twice.

Except for Polish, there are a lot of other languages that have three plural forms and more, such as Russian, Serbian, Slovak, Czech etc. But not all of them obey the same rule. That's why it is so important to know how many plural forms your language contains and how you can apply them.

<a name="where-to-learn"></a>

## Where can you learn about the number of plural forms?

When you are faced with a translation that requires the use of plurals, you may not be able to realize right away how many word forms one or another language provides. Fortunately, there are a lot of sources of information and some of them are listed below.

First of all, we would like to advise you to refer to the information of Mozilla’s [Localizations and Plurals](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals) article. There you will find different plural form rules and the languages that obey these rules. 

But despite this article is (or at least supposed to be) quite informative and comprehensible, it doesn’t contain the entire list of world’s languages. That’s why we also advise you to turn to the [Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html), where the wider list of languages is represented, but in another manner. The number of plural forms for different languages is shown this way: 'nplurals=2', 'nplurals=4' and so on. The numeral after the Equals sign '='  means the number of plural forms of the respective language. Besides, here you can see different formulas which can help you identify what form to use in each particular case.

Also, you can get information about plural forms in the [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules)(CLDR). The CLDR Plural Rules indicate an additional word form for decimal numbers (1.5; 2.3; 100.1…) but we don’t use them in AdGuard translations.

<a name="translations"></a>

## Plurals in AdGuard translations

First of all, you need to understand, that not every AdGuard translation requires the use of plural forms. 

Currently, we have 4 types of strings on Crowdin that involve the use of plurals.  

Let's take a closer look at them.

<a name="1type"></a>
#### 1. **Phrases with string keys ending in `.singular`, `.dual`, `.plural`**

![crowdin](https://cdn.adguard.com/public/Adguard/kb/en/plurals/dual_it.png)

Most of them are in the `AdGuard for Windows` project and consist of only one or two words:  

- `days;`
- `extensions;`
- `hours`

Please pay attention to the string keys when you meet such phrases on Crowdin and to the "context" field where you can see some important notes about plurals.

<a name="2type"></a>
#### 2. **Strings with singular and plural nouns separated by commas**

This kind of strings is mostly concentrated in the `AdGuard for Android` project.

Please look at the example:

![crowdin](https://cdn.adguard.com/public/Adguard/kb/en/plurals/android_fr.png)

If there are 3 plural forms of nouns in your language (like in Polish), please write all plural forms separated by commas.

`hour, hours --> godzinę, godziny, godzin`

In case a noun has only 2 forms, there is no need to write the same form twice (*typically only for this type of strings with plurals!*). However, it won't be a mistake if you repeat the form twice.

<a name="3type"></a>
#### 3. **Strings that use the Crowdin-developed pattern** 

This is the most user-friendly scheme of translating strings with plurals.

Crowdin suggests to users that they translate the certain amount of phrases with different plural forms. 

If your language provides only one plural form, then you will see only one phrase to translate. If you have three forms, Crowdin will provide you with the string divided into other two or three strings to translate.

For example:

![crowdin](https://cdn.adguard.com/public/Adguard/kb/en/plurals/crowdin_scheme.png) 

Please be attentive when translating these strings and approving them. If you have no idea what the "Other" field means, then just paste the same form as it is in the "Many" field. The "Many" and "Other" fields' contents can be the same.

<a name="4type"></a>
#### 4. **Strings with templates separated by the vertical bar sign**

This is the most complicated type of AdGuard strings which is mostly used in `AdGuard Websites` project (namely in `"adguard.com"` folder).

Pay close attention to a vertical bar sign between the sentences and **%count%** placeholders in original phrases – this will help you identify phrases where translations require the use of plural forms.

![crowdin](https://cdn.adguard.com/public/Adguard/kb/en/plurals/plurals_site.png) 

Now, let’s imagine — you are faced with such phrase: *"Standard license for %count% computer|Standard license for %count% computers"*. 

What should you know to translate it correctly?

Let's call the sentences which are divided by a vertical bar sign ***"templates"***, because actually they serve as templates for phrases with different numbers. 

Coming back to the example, as the English language includes only two plural forms, there should be two templates respectively:

`**Standard license for *%count%* computer|Standard license for *%count%* computers**`

where **template 1** – Standard license for *%count%* computer,  

and **template 2** – Standard license for *%count%* computers 

Another important thing you should pay your attention to is **%count%** placeholders that, as usual, take place before the words they define. Instead of **%count%** here will appear different numbers depending on which templates are being chosen.

In a situation with another language that has, let’s say, three plural forms, there should be three templates with two vertical bar signs between them. 

For example, we would like to translate the above mentioned phrase into Slovak, that according to the rule of [Localizations and Plurals](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals) article has three plural forms of words to use with following numbers:

![](Slovak.png)

Then the translation from English into Slovak should be: 

`**Štandartná licencia pre *%count%* počítač|Štandartná licencia pre *%count%* počítače|Štandartná licencia pre *%count%* počítačov**` 

In this case, we see three templates which contain three plural forms of the word *"počítač"* (computer) in Slovak.

**If we ignore one of the forms and use only two templates for Slovak instead of three, the system won’t be able to take an appropriate template for certain numbers** and, as a result, we will have grammar mistakes in sentences, like in English: *Standard license for 5 computer*.

But in some languages there can be words (let’s call them exclusions) that have fewer plural forms than the language itself. And that can cause some confusion. 

The Serbian word *'računar'* (computer), for example, has only two forms: *'računar'* - for 1, 21, 31 (and other numbers ending in 1, excluding 11) computers and *'računara'* - for other numbers of computers. But in spite of this fact, there should be three templates in AdGuard translations according to the general rule (which states that there are three plural forms of words in Serbian): 

![](Serbian.png)

Thus, the translation from English into Serbian should be:

`**Standardna licenca za *%count%* računar|Standardna licenca za *%count%* računara|Standardna licenca za *%count%* računara**`

Although it is obvious that the last two templates have no differences, it is very important to keep the rule: ***The number of templates should reflect the number of plural forms of the respective language!*** (typically for this type of strings with plurals).

<a name="summary"></a>

## Short summary 

When translating AdGuard projects pay your close attention to phrases which require the use of plural forms.

While first three types of such strings are more or less easy to perform, the fourth type demands more vigilance.

And again: if you come across an original phrase with two important elements: **the vertical bar sign** and **%count%** placeholders, please do the following:

+ Refer to the plural rule of a language you translate into; 

+ Keep the exact number of templates;

>The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms – two templates in translations; five plural forms – five templates, etc.

+ Do not forget to use a vertical bar sign between templates without any space before and after it (exceptions: strings with spaces in original phrases);

+ Do not translate, fill in or delete **%count%** placeholders.

By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process. Thank you!
