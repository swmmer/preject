//全选
function pubjs_CheckboxSelectAll(jsv_Pname, jsv_Sname) {
    var jsv_Snames = document.getElementsByName(jsv_Sname);
    for (var i = 0; i < jsv_Snames.length; i++) {
        jsv_Snames[i].checked = jsv_Pname.checked;
    }
}

//菜单跳转
function pubjs_JumpMenu(targ, selObj, restore) { //v3.0
    eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
    if (restore) selObj.selectedIndex = 0;
}

//打开新窗口
function pubjs_WindowOpen(jsv_Url, jsv_Winname, jsv_Width, jsv_Height) {
    if (jsv_Width == "") { jsv_Width = screen.width; }
    if (jsv_Height == "") { jsv_Height = screen.height; }

    jsv_Xposition = 0; jsv_Yposition = 0;
    if ((parseInt(navigator.appVersion) >= 4)) {
        jsv_Xposition = (screen.width - jsv_Width) / 2;
        jsv_Yposition = (screen.height - jsv_Height) / 2;
    }
    jsv_theproperty = "width=" + jsv_Width + ","
        + "height=" + jsv_Height + ","
        + "location=0,"
        + "menubar=0,"
        + "resizable=1,"
        + "scrollbars=1,"
        + "status=0,"
        + "titlebar=0,"
        + "toolbar=0,"
        + "hotkeys=0,"
        + "alwaysRaised=1,"
        + "screenx=" + jsv_Xposition + "," //仅适用于Netscape
        + "screeny=" + jsv_Yposition + "," //仅适用于Netscape
        + "left=" + jsv_Xposition + "," //IE
        + "top=" + jsv_Yposition; //IE
    var jsv_Windows = window.open(jsv_Url, jsv_Winname, jsv_theproperty);
    jsv_Windows.focus();
}

//打开固定新窗口
function pubjs_WindowOpenFixed(jsv_Url, jsv_Winname, jsv_Width, jsv_Height) {
    if (jsv_Width == "") { jsv_Width = screen.width; }
    if (jsv_Height == "") { jsv_Height = screen.height; }

    jsv_Xposition = 0; jsv_Yposition = 0;
    if ((parseInt(navigator.appVersion) >= 4)) {
        jsv_Xposition = (screen.width - jsv_Width) / 2;
        jsv_Yposition = (screen.height - jsv_Height) / 2;
    }
    jsv_theproperty = "width=" + jsv_Width + ","
        + "height=" + jsv_Height + ","
        + "location=0,"
        + "menubar=0,"
        + "resizable=0,"
        + "scrollbars=0,"
        + "status=0,"
        + "titlebar=0,"
        + "toolbar=0,"
        + "hotkeys=0,"
        + "alwaysRaised=1,"
        + "screenx=" + jsv_Xposition + "," //仅适用于Netscape
        + "screeny=" + jsv_Yposition + "," //仅适用于Netscape
        + "left=" + jsv_Xposition + "," //IE
        + "top=" + jsv_Yposition; //IE
    var jsv_Windows = window.open(jsv_Url, jsv_Winname, jsv_theproperty);
    jsv_Windows.focus();
}

//打开模态窗口
function pubjs_ShowDialog(jsv_URL, jsv_Width, jsv_Height) {
    if (jsv_Width == "" || jsv_Height == "" || jsv_Width == null || jsv_Height == null) {
        jsv_Width = "900px";
        jsv_Height = "530px";
    }
    window.showModalDialog(jsv_URL, window, "dialogWidth:" + jsv_Width + "px;dialogHeight:" + jsv_Height + "px;resizable:no;status:no;scroll:no;help:no;");
    //window.open(jsv_URL);
}

//打开可拉动模态窗口
function pubjs_ShowDialogScroll(jsv_URL, jsv_Width, jsv_Height) {
    if (jsv_Width == "" || jsv_Height == "" || jsv_Width == null || jsv_Height == null) {
        jsv_Width = "900px";
        jsv_Height = "530px";
    }
    window.showModalDialog(jsv_URL, window, "dialogWidth:" + jsv_Width + "px;dialogHeight:" + jsv_Height + "px;resizable:no;status:no;scroll:auto;help:no;");
    //window.open(jsv_URL);
}

//关闭窗口
function window_Close() {
    window.opener = null;
    window.open('', '_self');
    window.close();
}

function pubjs_ReturnReload(jsv_Alert, jsv_Close, jsv_Reload, jsv_Selectone, jsv_Win) { //刷新窗口的各种操作
    if (jsv_Win == "frame_MainBottom") {
        if (jsv_Selectone == "y") {
            parent.parent.frame_MainTop.document.getElementById("fo_SelectOne").value = ""; //清空页面已选中数据
        }
        if (jsv_Reload == "y") {
            parent.parent.frame_MainTop.aspnetForm.submit(); //刷新页面
            parent.parent.frame_Menu.location.href = parent.parent.frame_Menu.location.href; //刷新菜单
        }
        if (jsv_Alert != "") {
            alert(jsv_Alert); //弹出成功窗口
        }
        if (jsv_Close == "y") {
            parent.pubjs_MainBottomClose(); //关闭下框架
        }
    }

    if (jsv_Win == "frame_MainTop") {
        if (jsv_Alert != "") {
            alert(jsv_Alert); //弹出成功窗口
        }
        if (jsv_Reload == "y") {
            parent.parent.frame_Menu.location.href = parent.parent.frame_Menu.location.href; //刷新菜单
        }
    }

    if (jsv_Win == "ShowDialog") {
        if (jsv_Selectone == "y") {
            window.dialogArguments.document.getElementById("fo_SelectOne").value = ""; //清空页面已选中数据
        }
        if (jsv_Reload == "y") {
            window.dialogArguments.location.href = window.dialogArguments.location.href; //刷新页面
        }
        if (jsv_Alert != "") {
            alert(jsv_Alert); //弹出成功窗口
        }
        if (jsv_Close == "y") {
            window_Close(); //关闭窗口
        }
    }
}

//取得框架高度存入COOKIE
function pubjs_MainFrameRows() {
    var hight_MainFrame_Value = (parent.frame_MainBottom.document.body.clientHeight + 4);
    if (hight_MainFrame_Value == "4") { hight_MainFrame_Value = "0" };
    if (parent.frame_Main.rows.substring(parent.frame_Main.rows.indexOf(',', 0) + 1) != "0" && parent.frame_Main.rows.substring(0, 1) != "0") {
        var Then = new Date()
        Then.setTime(Then.getTime() + 1 * 3600000) //小时
        //Then.setTime(Then.getTime() - 1) //小时　　　　
        document.cookie = "hight_MainFrame=" + hight_MainFrame_Value + ";path=\;expires=" + Then.toGMTString();
    }
}

//读取框架页高度COOKIE
function pubjs_ReadMainFrameRows() {
    hight_MainFrame = "263";
    var jsv_Arr = document.cookie.split("; ");
    for (var i = 0; i < jsv_Arr.length; i++) {
        var jsv_ArrValue = jsv_Arr[i].split("=");
        if (jsv_ArrValue[0] == "hight_MainFrame") {
            if (jsv_ArrValue[1] != "") {
                hight_MainFrame = jsv_ArrValue[1];
            }
        }
    }
    //    alert(hight_MainFrame); //测试框架高度
}

//去除字符串的空格
function pubjs_CharTrim(jsc_String) {
    while (jsc_String.length > 0 && jsc_String.indexOf(" ") == 0) jsc_String = jsc_String.substr(1);
    while (jsc_String.length > 0 && jsc_String.lastIndexOf(" ") == (jsc_String.length - 1)) jsc_String = jsc_String.substr(0, jsc_String.length - 1);
    return jsc_String;
}

//控件背景恢复
function pubjs_FocusRebg() {
    var eventTarget = window.event.srcElement || eventTag.target; //取得恢复焦点的控件ID
    if (eventTarget.style.backgroundColor == "#ff0000" || eventTarget.style.backgroundColor == "#FF0000") {
        eventTarget.style.backgroundColor = "transparent"; //将背景变回原色
    }
    if (document.getElementById("fo_Submit")) {
        document.getElementById("fo_Submit").disabled = false;
    }
    else {
        document.getElementById("ctl00_page_Body_fo_Submit").disabled = false;
    }
}

//上菜单点击跳转页面
function pubjs_GotoUrlMain(jsv_menu_module, jsv_Url, jsv_menu_show) { //跳转到链接并显示或隐藏左侧菜单
    parent.frame_Menu.location.assign("idfv_Menu.aspx?fv_Module=" + jsv_menu_module); //显示左侧相关模块菜单
    parent.frame_MainTop.location.assign(jsv_Url); //跳转到主页面
    parent.frame_MainBottom.location.assign("../Window_MainBlank.htm"); //最下方框架跳转到空白页
    //parent.frame_Main.rows = "*,0"; //最下方框架收缩
    if (jsv_menu_show == "y") {
        parent.frame_Head.cols = "109,*"; //左侧菜单显示
        parent.frame_Top.document.getElementById("arrow_Top_L").style.display = ""; //箭头指向更改
        parent.frame_Top.document.getElementById("arrow_Top_R").style.display = "none"; //箭头指向更改
    }
    else {
        parent.frame_Head.cols = "0,*"; //左侧菜单隐藏
        parent.frame_Top.document.getElementById("arrow_Top_L").style.display = "none"; //箭头指向更改
        parent.frame_Top.document.getElementById("arrow_Top_R").style.display = ""; //箭头指向更改
    }
}

//左菜单点击跳转页面
function pubjs_GotoUrlMainTop(jsv_Url) { //跳转到链接并显示或隐藏左侧菜单
    parent.frame_MainTop.location.assign(jsv_Url); //跳转到主页面
    parent.frame_MainBottom.location.assign("../Window_MainBlank.htm"); //最下方框架跳转到空白页
    parent.frame_Main.rows = "*,0"; //最下方框架收缩
}

function pubjs_GotoUrlMainSelf(jsv_Url) { //跳转到链接并显示或隐藏左侧菜单
    parent.frame_MainTop.location.assign(jsv_Url); //跳转到主页面
    parent.frame_MainBottom.location.assign("../Window_MainBlank.htm"); //最下方框架跳转到空白页
    //parent.frame_Main.rows = "*,0"; //最下方框架收缩
}

function pubjs_GotoUrlParent(jsv_Url) {
    parent.location.assign(jsv_Url);
}

//定义地区数据数组
jsv_Provinces = new Array();
jsv_Provinces[0] = new Array("华北", "北京市|天津市|河北省|陕西省|内蒙古自治区");
jsv_Provinces[1] = new Array("东北", "辽宁省|吉林省|黑龙江省");
jsv_Provinces[2] = new Array("西北", "陕西省|甘肃省|宁夏回族自治区|青海省|新疆维吾尔族自治区");
jsv_Provinces[3] = new Array("华东", "上海市|江苏省|浙江省|安徽省|福建省|江西省|山东省");
jsv_Provinces[4] = new Array("西南", "重庆市|四川省|贵州省|云南省|西藏自治区");
jsv_Provinces[5] = new Array("华南", "河南省|湖北省|湖南省|广东省|广西壮族自治区|海南省");
jsv_Provinces[6] = new Array("", "-请选择-");

function pubjs_SelectProvince(jsv_ProvinceName, jsv_Province) {
    var i, j, k;
    document.getElementById(jsv_ProvinceName).length = 0;
    for (i = 0;
    i < jsv_Provinces.length; i++) {
        if (jsv_Provinces[i][0] == jsv_Province) {
            tmp_Provinces = jsv_Provinces[i][1].split("|")
            for (j = 0; j < tmp_Provinces.length; j++) {
                document.getElementById(jsv_ProvinceName).options[document.getElementById(jsv_ProvinceName).length] = new Option(tmp_Provinces[j], tmp_Provinces[j]);
            }
        }
    }
}

//定义城市数据数组
jsv_Citys = new Array();
jsv_Citys[0] = new Array("北京市", "北京");
jsv_Citys[1] = new Array("上海市", "上海");
jsv_Citys[2] = new Array("天津市", "天津");
jsv_Citys[3] = new Array("重庆市", "重庆");
jsv_Citys[4] = new Array("河北省", "石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
jsv_Citys[5] = new Array("山西省", "太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
jsv_Citys[6] = new Array("内蒙古自治区", "呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
jsv_Citys[7] = new Array("辽宁省", "沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
jsv_Citys[8] = new Array("吉林省", "长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
jsv_Citys[9] = new Array("黑龙江省", "哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
jsv_Citys[10] = new Array("江苏省", "南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
jsv_Citys[11] = new Array("浙江省", "杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
jsv_Citys[12] = new Array("安徽省", "合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
jsv_Citys[13] = new Array("福建省", "福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
jsv_Citys[14] = new Array("江西省", "南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
jsv_Citys[15] = new Array("山东省", "济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
jsv_Citys[16] = new Array("河南省", "郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
jsv_Citys[17] = new Array("湖北省", "武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
jsv_Citys[18] = new Array("湖南省", "长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
jsv_Citys[19] = new Array("广东省", "广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
jsv_Citys[20] = new Array("广西壮族自治区", "南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
jsv_Citys[21] = new Array("海南省", "海口|三亚");
jsv_Citys[22] = new Array("四川省", "成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
jsv_Citys[23] = new Array("贵州省", "贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
jsv_Citys[24] = new Array("云南省", "昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
jsv_Citys[25] = new Array("西藏自治区", "拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
jsv_Citys[26] = new Array("陕西省", "西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
jsv_Citys[27] = new Array("甘肃省", "兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
jsv_Citys[28] = new Array("宁夏回族自治区", "银川|石嘴山|吴忠|固原");
jsv_Citys[29] = new Array("青海省", "西宁|海东|海南|海北|黄南|玉树|果洛|海西");
jsv_Citys[30] = new Array("新疆维吾尔族自治区", "乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
jsv_Citys[31] = new Array("香港特别行政区", "香港特别行政区");
jsv_Citys[32] = new Array("澳门特别行政区", "澳门特别行政区");
jsv_Citys[33] = new Array("台湾省", "台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");
jsv_Citys[34] = new Array("其它", "北美洲|南美洲|亚洲|非洲|欧洲|大洋洲");
jsv_Citys[35] = new Array("-请选择-", "-请选择-");
jsv_Citys[36] = new Array("", "-请选择-");

function pubjs_SelectCity(jsv_CityName, jsv_Province) {
    var i, j, k;
    document.getElementById(jsv_CityName).length = 0;
    for (i = 0;
    i < jsv_Citys.length; i++) {
        if (jsv_Citys[i][0] == jsv_Province) {
            tmp_Citys = jsv_Citys[i][1].split("|")
            for (j = 0; j < tmp_Citys.length; j++) {
                document.getElementById(jsv_CityName).options[document.getElementById(jsv_CityName).length] = new Option(tmp_Citys[j], tmp_Citys[j]);
            }
        }
    }
}

//选中赋值
function pubjs_SelectTr(jsv_HiddenName_Index, jsv_HiddenName_One, jsv_Value_Index, jsv_Value_One) {
    var jsv_Value_One_Old = document.getElementById(jsv_HiddenName_One).value;
    if (jsv_Value_One_Old != '' && document.getElementById("trselect_" + jsv_Value_One_Old) != null) {
        document.getElementById("trselect_" + jsv_Value_One_Old).bgColor = '';
    }
    if (document.getElementById("trselect_" + jsv_Value_One)) {
        document.getElementById("trselect_" + jsv_Value_One).bgColor = '#CCDDEE';
    }
    document.getElementById(jsv_HiddenName_Index).value = jsv_Value_Index;
    document.getElementById(jsv_HiddenName_One).value = jsv_Value_One;
}

//鼠标划过改变背景颜色
function pubjs_BgColorOverNolink(jsv_ID) {
    jsv_ID.bgColor = '#FFFFCC';
}

function pubjs_BgColorOver(jsv_ID, jsv_Value) {
    if (jsv_Value == '1') {
        jsv_ID.style.cursor = 'pointer';
    }
    jsv_ID.bgColor = '#FFFFCC';
}

function pubjs_BgColorOut(id, jsv_HiddenName) {
    if (id.toString() != document.getElementById(jsv_HiddenName).value.toString()) {
        document.getElementById("trselect_" + id).bgColor = '';
    }
    else { document.getElementById("trselect_" + id).bgColor = '#CCDDEE'; }
}

//如果回车清除页面默认信息
function pubjs_KeyWordOnKeyDown() {
    if (event.keyCode == 13) {
        pubjs_ClearSelect();
    }
}

//清除页面默认信息
function pubjs_ClearSelect() {
    document.getElementById("fo_Page").value = "";
    document.getElementById("fo_SelectOne").value = "";
    document.getElementById("fo_SelectIndex").value = "";
}

//返回
function pubjs_WebBack() {
    parent.parent.frame_Menu.location.href = parent.parent.frame_Menu.location.href;
    pubjs_GotoUrlMainTop(document.getElementById("fo_WebBack").value);
}

//获取多选框值
function pubjs_Select_MoreValue(jsv_Value_1, jsv_Value_2) {
    var jsv_Value_all = "";
    var jsv_Select_one = 0;
    var jsv_Values = document.getElementsByName(jsv_Value_1);
    for (var i = 0; i < jsv_Values.length; i++) {
        if (jsv_Values[i].checked == true) {
            jsv_Value_all = jsv_Value_all + "|" + jsv_Values[i].value;
            jsv_Select_one = jsv_Select_one + 1;
        }
    }
    document.getElementById(jsv_Value_2).value = jsv_Value_all;
}

//新增JS

//下拉菜单默认值
function pubjs_SelectDefault(jsv_Input, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }
    var jsv_ValueS = new Array();
    jsv_ValueS = jsv_Value.split("|")
    for (i = 0; i < jsv_ValueS.length; i++) {
        if (document.getElementById(jsv_Input + jsv_ValueS[i]).value != "") {
            document.getElementById(jsv_Input + jsv_ValueS[i] + "_Select").value = document.getElementById(jsv_Input + jsv_ValueS[i]).value;
        }
        else {
            document.getElementById(jsv_Input + jsv_ValueS[i]).value = document.getElementById(jsv_Input + jsv_ValueS[i] + "_Select").value;
        }
    }
}

//赋值给下拉菜单
function pubjs_SelectValue(jsv_Type, jsv_Value, jsv_ID) {
    var jsv_SelectID = document.getElementById(jsv_Type); //下拉菜单ID
    jsv_SelectID.options.length = 0; //清空所有菜单值
    var jsv_AddValue = new Option("-请选择-", ""); //增加“请选择”项
    jsv_SelectID.add(jsv_AddValue, 0);
    var jsv_ValueS = new Array();
    var jsv_IDS = new Array();
    jsv_ValueS = jsv_Value.split("|")
    jsv_IDS = jsv_ID.split("|")
    for (i = 0; i < jsv_ValueS.length; i++) {
        if (jsv_ID == "") {
            jsv_AddValue = new Option(jsv_ValueS[i], jsv_ValueS[i]);
        }
        else {
            jsv_AddValue = new Option(jsv_ValueS[i], jsv_IDS[i]);
        }
        jsv_SelectID.add(jsv_AddValue, i + 1); //新增值
    }
}

//验证表单提交
function pubjs_FormSubmitCheck(jsv_Input, jsv_ID, jsv_Width, jsv_Height, jsv_Loading, jsv_SetTime) {
    document.getElementById("ctl00_page_Body_fo_Submit").disabled = true;
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }
    var jsv_IDS = new Array(); //定义数组
    jsv_IDS = jsv_ID.split("|"); //数组字符分割
    for (i = 0; i < jsv_IDS.length; i++) {
        if (document.getElementById(jsv_Input + jsv_IDS[i]) && document.getElementById(jsv_Input + jsv_IDS[i]).value == "") {
            var jsv_ID_Value = document.getElementById(jsv_Input + jsv_IDS[i]); //取得失去焦点的控件ID

            // 保存元素
            var AID = jsv_ID_Value;
            // 获得元素的左偏移量
            var left = jsv_ID_Value.offsetLeft;
            // 获得元素的顶端偏移量
            var top = jsv_ID_Value.offsetTop;

            // 循环获得元素的父级控件，累加左和顶端偏移量
            while (jsv_ID_Value = jsv_ID_Value.offsetParent) {
                left += jsv_ID_Value.offsetLeft;
                top += jsv_ID_Value.offsetTop;
            }
            AID.style.backgroundColor = "#FF0000";
            div_CheckReturn.style.display = "";
            //e.processOnServer = false; //为空不提交
            var jsv_Submit = "0";
        }
    }
    if (jsv_Submit != "0") {
        document.getElementById("ctl00_page_Body_fo_Submit").disabled = true;
        document.getElementById('div_Submit').style.display = 'none';
        document.getElementById('div_Loading').style.display = '';
        if (jsv_Loading == "1") {
            pubjs_ShowDialog('Public_Loading.aspx?fo_SetTime=' + jsv_SetTime, 500, 150);
        }
        aspnetForm.submit(); //不为空提交
    }
}

//表单控件批量验证数字
function pubjs_FormNumberS(jsv_Input, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }

    jsv_ValueS = jsv_Value.split("|"); //数组字符分割
    for (jsv_Int = 0; jsv_Int < jsv_ValueS.length; jsv_Int++) {
        if (document.getElementById(jsv_Input + jsv_ValueS[jsv_Int]).value != "") {
            if (isNaN(document.getElementById(jsv_Input + jsv_ValueS[jsv_Int]).value)) {
                alert("必须填写数字");
                document.getElementById(jsv_Input + jsv_ValueS[jsv_Int]).focus();
                return false;
            }
        }
    }
}

//表单控件间复制值
function pubjs_FormCopyValue(jsv_Input, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }
    document.getElementById(jsv_Input + jsv_Value).value = document.getElementById(jsv_Input + jsv_Value + "_Select").value;
}

//表单控件间批量复制值
function pubjs_FormCopyValueS(jsv_Input, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }

    jsv_ValueS = jsv_Value.split("|"); //数组字符分割
    for (jsv_Int = 0; jsv_Int < jsv_ValueS.length; jsv_Int++) {
        document.getElementById(jsv_Input + jsv_ValueS[jsv_Int]).value = document.getElementById(jsv_Input + jsv_ValueS[jsv_Int] + "_Select").value;
    }
}

//多选下拉菜单复制值
function pubjs_FormMultipleCopyValue(jsv_Input, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }

    var jsv_InputSelect = document.getElementById(jsv_Input + jsv_Value + "_Select");
    var jsv_SelectValue = "";
    for (jsv_Int = 0; jsv_Int < jsv_InputSelect.length; jsv_Int++) {
        if (jsv_InputSelect.options[jsv_Int].selected) {
            jsv_SelectValue += jsv_InputSelect.options[jsv_Int].value + ",";
        }
    }
    document.getElementById(jsv_Input + jsv_Value).value = "," + jsv_SelectValue.substr(0, jsv_SelectValue.length - 1) + ",";
}

//表单控件间复制值
function pubjs_FormCopyValue_1(jsv_Input, jsv_Value, jsv_Value_Select) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    document.getElementById(jsv_Input + jsv_Value).value = document.getElementById(jsv_Input + jsv_Value_Select).value;
}

//直接赋值给下拉菜单
function pubjs_SelectValue_0(jsv_Input, jsv_Select, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Select_ID = document.getElementById(jsv_Input + jsv_Select); //需要联动的下拉菜单ID
    jsv_Select_ID.options.length = 0; //清空所有菜单值
    var jsv_AddValue = new Option("-请选择-", ""); //增加“请选择”项
    jsv_Select_ID.add(jsv_AddValue, 0);

    var jsv_ValueS = new Array(); //定义数组

    jsv_ValueS = jsv_Value.split("|"); //数组字符分割
    for (i_0 = 0; i_0 < jsv_ValueS.length; i_0++) {
        jsv_AddValue = new Option(jsv_ValueS[i_0], jsv_ValueS[i_0]);
        jsv_Select_ID.add(jsv_AddValue, i_0 + 1); //新增值
    }
}

//赋值给二级下拉菜单
function pubjs_SelectValue_1(jsv_Input, jsv_Select_1, jsv_Select_2, jsv_Value, jsv_Default) {
    if (jsv_Default == "" || jsv_Default == null) {
        jsv_Default = "请选择";
    }
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Select_1_Value = document.getElementById(jsv_Input + jsv_Select_1).value; //下拉菜单值
    var jsv_Select2_ID = document.getElementById(jsv_Input + jsv_Select_2); //需要联动的下拉菜单ID
    jsv_Select2_ID.options.length = 0; //清空所有菜单值
    var jsv_AddValue = new Option("-" + jsv_Default + "-", ""); //增加“请选择”项
    jsv_Select2_ID.add(jsv_AddValue, 0);

    var jsv_Value_1S = new Array(); //定义数组1
    var jsv_Value_2S = new Array(); //定义数组2

    jsv_Value_1S = jsv_Value.split("|"); //数组1字符分割
    for (i_1 = 0; i_1 < jsv_Value_1S.length; i_1++) {
        jsv_Value_2S = jsv_Value_1S[i_1].split("^") //数组2字符分割
        if (jsv_Select_1_Value == jsv_Value_2S[0]) {
            jsv_AddValue = new Option(jsv_Value_2S[1], jsv_Value_2S[1]);
            jsv_Select2_ID.add(jsv_AddValue, i_1 + 1); //新增值
        }
    }
}

//赋值给两个值二级下拉菜单
function pubjs_SelectValue_2(jsv_Input, jsv_Select_1, jsv_Select_2, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Select_1_Value = document.getElementById(jsv_Input + jsv_Select_1).value; //下拉菜单值
    var jsv_Select2_ID = document.getElementById(jsv_Input + jsv_Select_2); //需要联动的下拉菜单ID
    jsv_Select2_ID.options.length = 0; //清空所有菜单值
    var jsv_AddValue = new Option("-请选择-", ""); //增加“请选择”项
    jsv_Select2_ID.add(jsv_AddValue, 0);

    var jsv_Value_1S = new Array(); //定义数组1
    var jsv_Value_2S = new Array(); //定义数组2

    jsv_Value_1S = jsv_Value.split("|"); //数组1字符分割
    for (i_2 = 0; i_2 < jsv_Value_1S.length; i_2++) {
        jsv_Value_2S = jsv_Value_1S[i_2].split("^") //数组2字符分割
        if (jsv_Select_1_Value == jsv_Value_2S[0]) {
            jsv_AddValue = new Option(jsv_Value_2S[1], jsv_Value_2S[2]);
            jsv_Select2_ID.add(jsv_AddValue, i_2 + 1); //新增值
        }
    }
}
//

//赋值给两个值二级下拉菜单_工时项目
function pubjs_SelectValue_2_Gsmx(jsv_Input, jsv_Select_1, jsv_Select_2, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Select_1_Value = "0";
    var jsv_Select_1_Text = document.getElementById(jsv_Input + jsv_Select_1).value; //下拉菜单值
    if (jsv_Select_1_Text == "项目") {
        jsv_Select_1_Value = "1";
    }
    if (jsv_Select_1_Text == "维护") {
        jsv_Select_1_Value = "2";
    }
    var jsv_Select2_ID = document.getElementById(jsv_Input + jsv_Select_2); //需要联动的下拉菜单ID
    jsv_Select2_ID.options.length = 0; //清空所有菜单值
    var jsv_AddValue = new Option("-请选择-", ""); //增加“请选择”项
    jsv_Select2_ID.add(jsv_AddValue, 0);

    var jsv_Value_1S = new Array(); //定义数组1
    var jsv_Value_2S = new Array(); //定义数组2

    jsv_Value_1S = jsv_Value.split("|"); //数组1字符分割
    for (i_2 = 0; i_2 < jsv_Value_1S.length; i_2++) {
        jsv_Value_2S = jsv_Value_1S[i_2].split("^") //数组2字符分割
        if (jsv_Select_1_Value == jsv_Value_2S[0]) {
            jsv_AddValue = new Option(jsv_Value_2S[2], jsv_Select_1_Value + "^" + jsv_Value_2S[1]);
            jsv_Select2_ID.add(jsv_AddValue, i_2 + 1); //新增值
        }
    }
}
//

//获取当前时间
function pubjs_DateNow() {
    var jsv_Now = new Date()
    var jsv_Year = jsv_Now.getYear()
    var jsv_Month = jsv_Now.getMonth() + 1
    var jsv_Day = jsv_Now.getDate()
    return jsv_Year + "-" + jsv_Month + "-" + jsv_Day
}
////

//复选框赋值
function pubjs_CheckboxSelect(jsv_Input, jsv_Name, jsv_Name_Select) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Value_all = "";
    var jsv_Select_one = 0;
    var jsv_Values = document.getElementsByName(jsv_Name_Select);
    for (var i = 0; i < jsv_Values.length; i++) {
        if (jsv_Values[i].checked == true) {
            jsv_Value_all = jsv_Value_all + "," + jsv_Values[i].value;
            jsv_Select_one = jsv_Select_one + 1;
        }
    }
    //if()
    document.getElementById(jsv_Input + jsv_Name).value = jsv_Value_all + ",";
    //alert(document.getElementById(jsv_Input + jsv_Name).value);
}
////

//产品树菜单
function pubjs_DepartmentGradeIDSelect(jsv_Value_1, jsv_Value_2) {
    var jsv_SelectID = document.getElementById(jsv_Value_1); //需要联动的下拉菜单ID
    jsv_SelectID.options.length = 0; //清空所有菜单值
    var jsv_AddValue = new Option("-请选择-", ""); //增加“请选择”项
    jsv_SelectID.add(jsv_AddValue, 0);
    var jsv_SelectValue = jsv_Value_2;
    var jsv_DepartmentParentIDSelects = new Array(); //定义数组1
    var jsv_DepartmentParentIDSelect = new Array(); //定义数组2
    jsv_DepartmentParentIDSelects = jsv_SelectValue.split("|"); //数组1字符分割
    for (i = 0; i < jsv_DepartmentParentIDSelects.length; i++) {
        jsv_DepartmentParentIDSelect = jsv_DepartmentParentIDSelects[i].split("^") //数组2字符分割
        if (jsv_DepartmentParentIDSelect[1] != "" && jsv_DepartmentParentIDSelect[1] != null) {
            jsv_AddValue = new Option(pubjs_StringNumber(jsv_DepartmentParentIDSelect[0], 1, "   ", "└ ") + jsv_DepartmentParentIDSelect[1], jsv_DepartmentParentIDSelect[2]);
            jsv_SelectID.add(jsv_AddValue, i + 1); //新增值
        }
    }
}
////

//补足字符
function pubjs_StringNumber(jsv_Number, jsv_Begin, jsv_String, jsv_Suffix) {
    var jsv_String_Value = "";
    for (jsv_Int = 1; jsv_Int < jsv_Number; jsv_Int++) {
        jsv_String_Value = jsv_String + jsv_String_Value;
    }
    if (jsv_Number > jsv_Begin) {
        jsv_String_Value = jsv_String_Value + jsv_Suffix;
    }
    return jsv_String_Value;
}
////

//补足字符
function pubjs_FormatDate(jsv_Date) {

    jsv_Date_Value = jsv_Date.getFullYear();

    var jsv_Date_Month = jsv_Date.getMonth() + 1;
    if (parseInt(jsv_Date_Month) <= 9) {
        jsv_Date_Value = jsv_Date_Value + "-0" + jsv_Date_Month;
    }
    else {
        jsv_Date_Value = jsv_Date_Value + "-" + jsv_Date_Month;
    }

    var jsv_Date_Date = jsv_Date.getDate();
    if (parseInt(jsv_Date_Date) <= 9) {
        jsv_Date_Value = jsv_Date_Value + "-0" + jsv_Date_Date;
    }
    else {
        jsv_Date_Value = jsv_Date_Value + "-" + jsv_Date_Date;
    }

    return jsv_Date_Value;
}
////