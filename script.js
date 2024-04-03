const blogPostsSection = document.querySelector('.blog-posts');

// Sample blog post data (You'd likely fetch this from a database or file)
const blogPosts = [
    { title: 'My First Post', date: 'April 3, 2024', content: 'Lorem ipsum dolor sit amet...' },
    // ... more posts here
];

function generateBlogPosts() {
    blogPosts.forEach(post => {
        let postElem = document.createElement('article');
        postElem.classList.add('blog-post');
        postElem.innerHTML = `
            <h2><a href="single.html">${post.title}</a></h2> 
            <p class="post-meta">Published on: ${post.date}</p>
            <p>${post.content.substring(0, 100)}...</p> 
        `;
        blogPostsSection.appendChild(postElem);
    });
}

generateBlogPosts(); 
