# My First Single Page application



## Description

This single-page web application is created with a two-column layout, with a header and a footer.

Each component of this webpage has been designed with ```component reusability``` in mind.

Below sections give an overview of each component of the web page:


## Header

The header component contains the logo of the appliction i.e. "Nature at its best".
This component is common across all the navigations.

**Files used:**
1. /src/components/headercomponent/header.js
2. /src/components/headercomponent/style.css



## **Logo**
For diplaying the logo in different style, the "logo.js" has been used.

**Files used:**
1. /src/components/logo/logo.js
2. /src/components/logo/style.css



## Footer

The footer component contains the copy-right information i.e. "Copyright © MyFirstSinglePage.com".
This component is common across all navigations.

**Files used:**
1. /src/components/footercomponent/footer.js
2. /src/components/footercomponent/style.css



## Main

The Main section holds 3 blogs. Each blog contains the following features:

 a. Images:
    Images are displayed to the left.
    These images are picked from 'images' folder.
	
 b. Blog title:
    Blog title holds the main headline of the blog post.
    This has a hyperlink to the full blog post containing the image and complete blog text.
	
 c. Author & Date
    Here the name of the author and created date are mentioned.
 
 d. Summay
    Summay of the blog post. This section displays a summary of the blog's contents.

**Files used:**
1. /src/components/maincontent/main.js
2. /src/components/maincontent/style.css
3. /src/components/home/home.js
4. /src/components/home/style.css



## Nav

The 'Nav' section helps in navigating back-and-forth through various part of the web application.
This section is common across all the navigations.

This section contains 2 parts:

1. 'Home' link
    This link points to home-page of the single-page web application, which can be used to return back from any individual blog posts.

2. Google News headlines
   This section contains top headlines from Google News, pulled using AJAX calls to [Google API](https://newsapi.org/s/google-news-api).
   Also, this section refreshes every 5 seconds, which can be seen from the 'Last Refreshed Time', mentioned under the 'Home' link.

**Files used:**
1. /src/components/Navbar/nav.js
2. /src/components/Navbar/style.css



## Individual Blog Posts

This section represents the full blog post, corresponding to blog post titles and summaries mentioned in the 'Home' page.
A single script 'post.js' dynamically generates 3 different blog posts, using data from a JSON file - "blog.json".

**Files used:**
1. /src/components/post/post.js
2. /src/components/post/style.css
3. /src/data/blog.json



## Prerequisites

1. [Node.js](https://nodejs.org/en/download/) must be installed on the machine.



## Execution Instructions

Below steps are to followed in 'Windows 10' for bringing up the single-page web application :

**Step 1:**  Open```Command Prompt```

**Step 2:**  Run the following command: ```npm install -g create-react-app```

**Step 3:**  Run the following command: ```create-react-app <Project_Folder_Name>```

**Step 4:**  Run the following command: ```cd <Project_Folder_Name>```

**Step 5:**  Run the following command: ```npm install --save react-router-dom```

**Step 6:**  Run the following command: ```git clone https://github.com/mm8037/SinglePageApplication.git```

**Step 7:**  Run the following command: ```Enter Git Username & Password, if prompted```

**Step 8:**  Run the following command: ```xcopy CS612-Assignment4 .\ /E /Y```

**Step 9:**  Run the following command: ```rmdir /Q /S CS612-Assignment4```

**Step 10:** Run the following command: ```npm start```

**Note:** In the above commands, please replace *<Project_Folder_Name>* with a suitable name (like 'my-app').
