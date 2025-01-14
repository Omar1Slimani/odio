document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");

    // محاولة تشغيل الصوت تلقائيًا
    audio.play().catch(error => {
        console.log("يحتاج المستخدم إلى التفاعل مع الصفحة أولاً.");
    });

    // تشغيل الصوت عند أول نقرة إذا منع المتصفح التشغيل التلقائي
    document.body.addEventListener("click", function() {
        audio.play();
    }, { once: true }); // سيتم تشغيل الصوت عند أول نقرة فقط
});