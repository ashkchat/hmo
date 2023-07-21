$(`<center>
   <div style="position: static;width: 100%;" onclick="setTimeout(function(){fixSize();},800);">
    <div width="99.5%" id="design-a" style="background-color: #fffacf;color: #296887;border-bottom: 3px solid #296887;border-top: 3px solid #296887;padding-bottom: 2px;border-radius: 0px 0px 15px 15px;">
      <font id="sultan"><u><b>الاشتراكــات</b></u> </font>
        <div id="spanan"  style="font-family: jazeera-light, FontAwesome;color: red;text-align: right;display:none;">
            <p style="text-align: center"><b><font color="#000080">لمشاهدة أسعار العضويات المدفوعة من النجوم والسوابر والبنرات لدينا</font></b></p> 
            <p style="text-align: center"><u><b><a target="_blank" href="https://www.ashkchat.com/sub.html">اضغط هنا لمشاهدة الأسعار</a></b></u></p>
       </div> 
           </div>
   </div>
</center>`).insertBefore('#d2');
$("#design-a").click(function() {
    $("#spanan").slideToggle(function() {});
});
