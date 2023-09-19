const btnLike = document.getElementById('like');
const btnComment = document.getElementById('comment');

const commentBox = document.getElementById('comment-box');
const btnSend = document.getElementById('send');

let cmtTxt = document.getElementById('comment-text');
let inputedCmt = document.getElementById('comment-input');

btnLike.addEventListener('click', function () {
    if (btnLike.innerHTML === '<i class="fa-regular fa-thumbs-up"></i>') {
        btnLike.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
        btnLike.style.color = 'blue';
    } else {
        btnLike.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
        btnLike.style.color = '#000';
    }
});

btnComment.addEventListener('click', function () {
    commentBox.style.display = 'block';
});

btnSend.addEventListener('click', function () {
    if (inputedCmt.value !== '') {
        cmtTxt.style.display = 'block';
        commentBox.style.borderBottomLeftRadius = '0px';
        commentBox.style.borderBottomRightRadius = '0px';

        let div1 = document.createElement('div');
        let image = document.createElement('img');
        let spanElement = document.createElement('span');
        let name = document.createElement('h4');
        let cmt = document.createElement('h5');

        image.src = 'https://images.unsplash.com/photo-1595255958792-2740eb409d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZHNvbWUlMjBtYW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60';

        name.textContent = 'Ajinkya Patil';
        cmt.textContent = inputedCmt.value;
        inputedCmt.value = '';
        spanElement.innerHTML = '<i class="fa-solid fa-trash"></i>';


        div1.appendChild(image);
        name.appendChild(spanElement);
        div1.appendChild(name);
        div1.appendChild(cmt);
        cmtTxt.appendChild(div1);

        if (spanElement.innerHTML === '<i class="fa-solid fa-trash"></i>') {
            spanElement.addEventListener('click', function () {
                div1.remove();
                if (cmtTxt.children.length === 0) {
                    cmtTxt.style.display = 'none';
                    commentBox.style.borderBottomLeftRadius = '10px';
                    commentBox.style.borderBottomRightRadius = '10px';
                }
            });
        }
    }

});
