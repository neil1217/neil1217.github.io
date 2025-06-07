
{
    function calculateAge(birthDateStr) {
        const today = new Date();
        const birthDate = new Date(birthDateStr);

        let age = today.getFullYear() - birthDate.getFullYear();
        const hasBirthdayPassed =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasBirthdayPassed) {
            age--;
        }
        return age;
    }

    // 顯示在畫面上
    document.getElementById('myAge').textContent = calculateAge("1993-12-17");
}

{
    const btn = document.querySelector('.mainBtn')
    btn.addEventListener('click', function () {
        const mainDiv = document.querySelector('.main')
        mainDiv.innerHTML += '<div class="enterAnimation">WELCOME</div>'
        const welcome = document.querySelector('.enterAnimation')
        setTimeout(() => {
            welcome.classList.add('act')
            setTimeout(() => {
                mainDiv.remove()
            }, 1300)
        }, 200)
        bodyContent = document.querySelector('body')
        bodyContent.innerHTML = `
            <div class="content">
                <div class="top">
                    <div class="top_left"></div>
                    <div class="top_right"></div> 
                </div>
                <div class="mid"> 
                </div>
            </div>
            <footer></footer>
        `




    })

}