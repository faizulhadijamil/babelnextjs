import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import remark from 'remark'
import html from 'remark-html'

const firebase = require('firebase/app');
require('firebase/firestore');

var config = {
  apiKey: "AIzaSyBoucAnhK3TCPMaJ5QrNnLlw7-bCjsjyoo",
    authDomain: "babelasia-37615.firebaseapp.com",
    databaseURL: "https://babelasia-37615.firebaseio.com",
    projectId: "babelasia-37615",
    storageBucket: "babelasia-37615.appspot.com",
    messagingSenderId: "171899057367",
    appId: "1:171899057367:web:853f0f7baadebbda24ec92",
    measurementId: "G-6GSZPHL0NH"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  console.log('allpostdata: ', allPostsData);
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// get from firestore
export function getAllUsers() {
    let usersdata = [{name:'faizul'}];
    firebase.firestore().collection('users').limit(10).get()
        .then(snapshot => {
            snapshot.forEach((doc)=>{
                usersdata.push({
                    id:doc.id,
                    ...doc.data()
                })
            })
            // return {usersdata}
        })
    return {usersdata}
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  }