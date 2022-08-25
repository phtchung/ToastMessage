function toast({title='', message='', type ='infor', duration =3000}){

    const main = document.getElementById('toast');
    if(main){
    const  toast = document.createElement('div');

    // auto remove
    const autoRemoved = setTimeout(function (){
    main.removeChild(toast);
},duration+1000);

    // remove toast when click
    toast.onclick = function (e){
    if(e.target.closest('.toast__close')){
    main.removeChild(toast);
    clearTimeout(autoRemoved);
    // khi remove r thì tự động bỏ đi
}
}

    const icons = {
    success:'fa-solid fa-check',
    infor: 'fa-solid fa-info',
    warning:'fa-solid fa-exclamation',
    error:'fa-solid fa-exclamation',
};


    const icon=icons[type];
    const delay = (duration/ 1000).toFixed(2);
    // lấy ra đúng icon tương đương dưa vào type

    toast.classList.add('toast',`toast--${type}`);
    //    add class toast
    toast.style.animation =`slideInLeft ease .3s , fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML= `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                     <p class = toast__msg>${message}  </p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                `;
    main.appendChild(toast);

}
}
    // ấn vào hàm onlick thì nhảy ra
    function showSuccessToast(){
    toast({
        title:'Thành công',
        message:'Bạn đã đăng kí thành công  ',
        type:'success',
        duration:5000
    })
}
 // gọi cái này là được
    function showErrorToast(){
    toast({
        title:'Thất bại ',
        message:'Có lỗi xảy ra.Hãy thử lại ',
        type:'error',
        duration:1000
    })
}


