//ȫѡ
function pubjs_CheckboxSelectAll(jsv_Pname, jsv_Sname) {
    var jsv_Snames = document.getElementsByName(jsv_Sname);
    for (var i = 0; i < jsv_Snames.length; i++) {
        jsv_Snames[i].checked = jsv_Pname.checked;
    }
}

//�˵���ת
function pubjs_JumpMenu(targ, selObj, restore) { //v3.0
    eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
    if (restore) selObj.selectedIndex = 0;
}

//���´���
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
        + "screenx=" + jsv_Xposition + "," //��������Netscape
        + "screeny=" + jsv_Yposition + "," //��������Netscape
        + "left=" + jsv_Xposition + "," //IE
        + "top=" + jsv_Yposition; //IE
    var jsv_Windows = window.open(jsv_Url, jsv_Winname, jsv_theproperty);
    jsv_Windows.focus();
}

//�򿪹̶��´���
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
        + "screenx=" + jsv_Xposition + "," //��������Netscape
        + "screeny=" + jsv_Yposition + "," //��������Netscape
        + "left=" + jsv_Xposition + "," //IE
        + "top=" + jsv_Yposition; //IE
    var jsv_Windows = window.open(jsv_Url, jsv_Winname, jsv_theproperty);
    jsv_Windows.focus();
}

//��ģ̬����
function pubjs_ShowDialog(jsv_URL, jsv_Width, jsv_Height) {
    if (jsv_Width == "" || jsv_Height == "" || jsv_Width == null || jsv_Height == null) {
        jsv_Width = "900px";
        jsv_Height = "530px";
    }
    window.showModalDialog(jsv_URL, window, "dialogWidth:" + jsv_Width + "px;dialogHeight:" + jsv_Height + "px;resizable:no;status:no;scroll:no;help:no;");
    //window.open(jsv_URL);
}

//�򿪿�����ģ̬����
function pubjs_ShowDialogScroll(jsv_URL, jsv_Width, jsv_Height) {
    if (jsv_Width == "" || jsv_Height == "" || jsv_Width == null || jsv_Height == null) {
        jsv_Width = "900px";
        jsv_Height = "530px";
    }
    window.showModalDialog(jsv_URL, window, "dialogWidth:" + jsv_Width + "px;dialogHeight:" + jsv_Height + "px;resizable:no;status:no;scroll:auto;help:no;");
    //window.open(jsv_URL);
}

//�رմ���
function window_Close() {
    window.opener = null;
    window.open('', '_self');
    window.close();
}

function pubjs_ReturnReload(jsv_Alert, jsv_Close, jsv_Reload, jsv_Selectone, jsv_Win) { //ˢ�´��ڵĸ��ֲ���
    if (jsv_Win == "frame_MainBottom") {
        if (jsv_Selectone == "y") {
            parent.parent.frame_MainTop.document.getElementById("fo_SelectOne").value = ""; //���ҳ����ѡ������
        }
        if (jsv_Reload == "y") {
            parent.parent.frame_MainTop.aspnetForm.submit(); //ˢ��ҳ��
            parent.parent.frame_Menu.location.href = parent.parent.frame_Menu.location.href; //ˢ�²˵�
        }
        if (jsv_Alert != "") {
            alert(jsv_Alert); //�����ɹ�����
        }
        if (jsv_Close == "y") {
            parent.pubjs_MainBottomClose(); //�ر��¿��
        }
    }

    if (jsv_Win == "frame_MainTop") {
        if (jsv_Alert != "") {
            alert(jsv_Alert); //�����ɹ�����
        }
        if (jsv_Reload == "y") {
            parent.parent.frame_Menu.location.href = parent.parent.frame_Menu.location.href; //ˢ�²˵�
        }
    }

    if (jsv_Win == "ShowDialog") {
        if (jsv_Selectone == "y") {
            window.dialogArguments.document.getElementById("fo_SelectOne").value = ""; //���ҳ����ѡ������
        }
        if (jsv_Reload == "y") {
            window.dialogArguments.location.href = window.dialogArguments.location.href; //ˢ��ҳ��
        }
        if (jsv_Alert != "") {
            alert(jsv_Alert); //�����ɹ�����
        }
        if (jsv_Close == "y") {
            window_Close(); //�رմ���
        }
    }
}

//ȡ�ÿ�ܸ߶ȴ���COOKIE
function pubjs_MainFrameRows() {
    var hight_MainFrame_Value = (parent.frame_MainBottom.document.body.clientHeight + 4);
    if (hight_MainFrame_Value == "4") { hight_MainFrame_Value = "0" };
    if (parent.frame_Main.rows.substring(parent.frame_Main.rows.indexOf(',', 0) + 1) != "0" && parent.frame_Main.rows.substring(0, 1) != "0") {
        var Then = new Date()
        Then.setTime(Then.getTime() + 1 * 3600000) //Сʱ
        //Then.setTime(Then.getTime() - 1) //Сʱ��������
        document.cookie = "hight_MainFrame=" + hight_MainFrame_Value + ";path=\;expires=" + Then.toGMTString();
    }
}

//��ȡ���ҳ�߶�COOKIE
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
    //    alert(hight_MainFrame); //���Կ�ܸ߶�
}

//ȥ���ַ����Ŀո�
function pubjs_CharTrim(jsc_String) {
    while (jsc_String.length > 0 && jsc_String.indexOf(" ") == 0) jsc_String = jsc_String.substr(1);
    while (jsc_String.length > 0 && jsc_String.lastIndexOf(" ") == (jsc_String.length - 1)) jsc_String = jsc_String.substr(0, jsc_String.length - 1);
    return jsc_String;
}

//�ؼ������ָ�
function pubjs_FocusRebg() {
    var eventTarget = window.event.srcElement || eventTag.target; //ȡ�ûָ�����Ŀؼ�ID
    if (eventTarget.style.backgroundColor == "#ff0000" || eventTarget.style.backgroundColor == "#FF0000") {
        eventTarget.style.backgroundColor = "transparent"; //���������ԭɫ
    }
    if (document.getElementById("fo_Submit")) {
        document.getElementById("fo_Submit").disabled = false;
    }
    else {
        document.getElementById("ctl00_page_Body_fo_Submit").disabled = false;
    }
}

//�ϲ˵������תҳ��
function pubjs_GotoUrlMain(jsv_menu_module, jsv_Url, jsv_menu_show) { //��ת�����Ӳ���ʾ���������˵�
    parent.frame_Menu.location.assign("idfv_Menu.aspx?fv_Module=" + jsv_menu_module); //��ʾ������ģ��˵�
    parent.frame_MainTop.location.assign(jsv_Url); //��ת����ҳ��
    parent.frame_MainBottom.location.assign("../Window_MainBlank.htm"); //���·������ת���հ�ҳ
    //parent.frame_Main.rows = "*,0"; //���·��������
    if (jsv_menu_show == "y") {
        parent.frame_Head.cols = "109,*"; //���˵���ʾ
        parent.frame_Top.document.getElementById("arrow_Top_L").style.display = ""; //��ͷָ�����
        parent.frame_Top.document.getElementById("arrow_Top_R").style.display = "none"; //��ͷָ�����
    }
    else {
        parent.frame_Head.cols = "0,*"; //���˵�����
        parent.frame_Top.document.getElementById("arrow_Top_L").style.display = "none"; //��ͷָ�����
        parent.frame_Top.document.getElementById("arrow_Top_R").style.display = ""; //��ͷָ�����
    }
}

//��˵������תҳ��
function pubjs_GotoUrlMainTop(jsv_Url) { //��ת�����Ӳ���ʾ���������˵�
    parent.frame_MainTop.location.assign(jsv_Url); //��ת����ҳ��
    parent.frame_MainBottom.location.assign("../Window_MainBlank.htm"); //���·������ת���հ�ҳ
    parent.frame_Main.rows = "*,0"; //���·��������
}

function pubjs_GotoUrlMainSelf(jsv_Url) { //��ת�����Ӳ���ʾ���������˵�
    parent.frame_MainTop.location.assign(jsv_Url); //��ת����ҳ��
    parent.frame_MainBottom.location.assign("../Window_MainBlank.htm"); //���·������ת���հ�ҳ
    //parent.frame_Main.rows = "*,0"; //���·��������
}

function pubjs_GotoUrlParent(jsv_Url) {
    parent.location.assign(jsv_Url);
}

//���������������
jsv_Provinces = new Array();
jsv_Provinces[0] = new Array("����", "������|�����|�ӱ�ʡ|����ʡ|���ɹ�������");
jsv_Provinces[1] = new Array("����", "����ʡ|����ʡ|������ʡ");
jsv_Provinces[2] = new Array("����", "����ʡ|����ʡ|���Ļ���������|�ຣʡ|�½�ά�����������");
jsv_Provinces[3] = new Array("����", "�Ϻ���|����ʡ|�㽭ʡ|����ʡ|����ʡ|����ʡ|ɽ��ʡ");
jsv_Provinces[4] = new Array("����", "������|�Ĵ�ʡ|����ʡ|����ʡ|����������");
jsv_Provinces[5] = new Array("����", "����ʡ|����ʡ|����ʡ|�㶫ʡ|����׳��������|����ʡ");
jsv_Provinces[6] = new Array("", "-��ѡ��-");

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

//���������������
jsv_Citys = new Array();
jsv_Citys[0] = new Array("������", "����");
jsv_Citys[1] = new Array("�Ϻ���", "�Ϻ�");
jsv_Citys[2] = new Array("�����", "���");
jsv_Citys[3] = new Array("������", "����");
jsv_Citys[4] = new Array("�ӱ�ʡ", "ʯ��ׯ|����|��̨|����|�żҿ�|�е�|�ȷ�|��ɽ|�ػʵ�|����|��ˮ");
jsv_Citys[5] = new Array("ɽ��ʡ", "̫ԭ|��ͬ|��Ȫ|����|����|˷��|����|����|����|�ٷ�|�˳�");
jsv_Citys[6] = new Array("���ɹ�������", "���ͺ���|��ͷ|�ں�|���|���ױ�����|��������|����ľ��|�˰���|�����첼��|���ֹ�����|�����׶���|��������");
jsv_Citys[7] = new Array("����ʡ", "����|����|��ɽ|��˳|��Ϫ|����|����|Ӫ��|����|����|�̽�|����|����|��«��");
jsv_Citys[8] = new Array("����ʡ", "����|����|��ƽ|��Դ|ͨ��|��ɽ|��ԭ|�׳�|�ӱ�");
jsv_Citys[9] = new Array("������ʡ", "������|�������|ĵ����|��ľ˹|����|�绯|�׸�|����|�ں�|˫Ѽɽ|����|��̨��|���˰���");
jsv_Citys[10] = new Array("����ʡ", "�Ͼ�|��|����|��ͨ|����|�γ�|����|���Ƹ�|����|����|��Ǩ|̩��|����");
jsv_Citys[11] = new Array("�㽭ʡ", "����|����|����|����|����|����|��|����|��ɽ|̨��|��ˮ");
jsv_Citys[12] = new Array("����ʡ", "�Ϸ�|�ߺ�|����|��ɽ|����|ͭ��|����|��ɽ|����|����|����|����|����|����|����|����|����");
jsv_Citys[13] = new Array("����ʡ", "����|����|����|����|Ȫ��|����|��ƽ|����|����");
jsv_Citys[14] = new Array("����ʡ", "�ϲ���|������|�Ž�|ӥ̶|Ƽ��|����|����|����|�˴�|����|����");
jsv_Citys[15] = new Array("ɽ��ʡ", "����|�ൺ|�Ͳ�|��ׯ|��Ӫ|��̨|Ϋ��|����|̩��|����|����|����|����|����|�ĳ�|����|����");
jsv_Citys[16] = new Array("����ʡ", "֣��|����|����|ƽ��ɽ|����|�ױ�|����|����|���|���|���|����Ͽ|����|����|����|�ܿ�|פ���|��Դ");
jsv_Citys[17] = new Array("����ʡ", "�人|�˲�|����|�差|��ʯ|����|�Ƹ�|ʮ��|��ʩ|Ǳ��|����|����|����|����|Т��|����");
jsv_Citys[18] = new Array("����ʡ", "��ɳ|����|����|��̶|����|����|����|����|¦��|����|����|����|����|�żҽ�");
jsv_Citys[19] = new Array("�㶫ʡ", "����|����|�麣|��ͷ|��ݸ|��ɽ|��ɽ|�ع�|����|տ��|ï��|����|����|÷��|��β|��Դ|����|��Զ|����|����|�Ƹ�");
jsv_Citys[20] = new Array("����׳��������", "����|����|����|����|����|���Ǹ�|����|���|����|��������|���ݵ���|����|��ɫ|�ӳ�");
jsv_Citys[21] = new Array("����ʡ", "����|����");
jsv_Citys[22] = new Array("�Ĵ�ʡ", "�ɶ�|����|����|�Թ�|��֦��|��Ԫ|�ڽ�|��ɽ|�ϳ�|�˱�|�㰲|�ﴨ|�Ű�|üɽ|����|��ɽ|����");
jsv_Citys[23] = new Array("����ʡ", "����|����ˮ|����|��˳|ͭ��|ǭ����|�Ͻ�|ǭ����|ǭ��");
jsv_Citys[24] = new Array("����ʡ", "����|����|����|��Ϫ|��ͨ|����|���|��ɽ|˼é|��˫����|��ɽ|�º�|����|ŭ��|����|�ٲ�");
jsv_Citys[25] = new Array("����������", "����|�տ���|ɽ��|��֥|����|����|����");
jsv_Citys[26] = new Array("����ʡ", "����|����|����|ͭ��|μ��|�Ӱ�|����|����|����|����");
jsv_Citys[27] = new Array("����ʡ", "����|������|���|����|��ˮ|��Ȫ|��Ҵ|����|����|¤��|ƽ��|����|����|����");
jsv_Citys[28] = new Array("���Ļ���������", "����|ʯ��ɽ|����|��ԭ");
jsv_Citys[29] = new Array("�ຣʡ", "����|����|����|����|����|����|����|����");
jsv_Citys[30] = new Array("�½�ά�����������", "��³ľ��|ʯ����|��������|����|��������|����|�������տ¶�����|��������|��³��|����|��ʲ|����|������");
jsv_Citys[31] = new Array("����ر�������", "����ر�������");
jsv_Citys[32] = new Array("�����ر�������", "�����ر�������");
jsv_Citys[33] = new Array("̨��ʡ", "̨��|����|̨��|̨��|����|��Ͷ|����|����|�û�|����|����|����|��԰|����|��¡|̨��|����|����|���");
jsv_Citys[34] = new Array("����", "������|������|����|����|ŷ��|������");
jsv_Citys[35] = new Array("-��ѡ��-", "-��ѡ��-");
jsv_Citys[36] = new Array("", "-��ѡ��-");

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

//ѡ�и�ֵ
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

//��껮���ı䱳����ɫ
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

//����س����ҳ��Ĭ����Ϣ
function pubjs_KeyWordOnKeyDown() {
    if (event.keyCode == 13) {
        pubjs_ClearSelect();
    }
}

//���ҳ��Ĭ����Ϣ
function pubjs_ClearSelect() {
    document.getElementById("fo_Page").value = "";
    document.getElementById("fo_SelectOne").value = "";
    document.getElementById("fo_SelectIndex").value = "";
}

//����
function pubjs_WebBack() {
    parent.parent.frame_Menu.location.href = parent.parent.frame_Menu.location.href;
    pubjs_GotoUrlMainTop(document.getElementById("fo_WebBack").value);
}

//��ȡ��ѡ��ֵ
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

//����JS

//�����˵�Ĭ��ֵ
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

//��ֵ�������˵�
function pubjs_SelectValue(jsv_Type, jsv_Value, jsv_ID) {
    var jsv_SelectID = document.getElementById(jsv_Type); //�����˵�ID
    jsv_SelectID.options.length = 0; //������в˵�ֵ
    var jsv_AddValue = new Option("-��ѡ��-", ""); //���ӡ���ѡ����
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
        jsv_SelectID.add(jsv_AddValue, i + 1); //����ֵ
    }
}

//��֤���ύ
function pubjs_FormSubmitCheck(jsv_Input, jsv_ID, jsv_Width, jsv_Height, jsv_Loading, jsv_SetTime) {
    document.getElementById("ctl00_page_Body_fo_Submit").disabled = true;
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }
    var jsv_IDS = new Array(); //��������
    jsv_IDS = jsv_ID.split("|"); //�����ַ��ָ�
    for (i = 0; i < jsv_IDS.length; i++) {
        if (document.getElementById(jsv_Input + jsv_IDS[i]) && document.getElementById(jsv_Input + jsv_IDS[i]).value == "") {
            var jsv_ID_Value = document.getElementById(jsv_Input + jsv_IDS[i]); //ȡ��ʧȥ����Ŀؼ�ID

            // ����Ԫ��
            var AID = jsv_ID_Value;
            // ���Ԫ�ص���ƫ����
            var left = jsv_ID_Value.offsetLeft;
            // ���Ԫ�صĶ���ƫ����
            var top = jsv_ID_Value.offsetTop;

            // ѭ�����Ԫ�صĸ����ؼ����ۼ���Ͷ���ƫ����
            while (jsv_ID_Value = jsv_ID_Value.offsetParent) {
                left += jsv_ID_Value.offsetLeft;
                top += jsv_ID_Value.offsetTop;
            }
            AID.style.backgroundColor = "#FF0000";
            div_CheckReturn.style.display = "";
            //e.processOnServer = false; //Ϊ�ղ��ύ
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
        aspnetForm.submit(); //��Ϊ���ύ
    }
}

//���ؼ�������֤����
function pubjs_FormNumberS(jsv_Input, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }

    jsv_ValueS = jsv_Value.split("|"); //�����ַ��ָ�
    for (jsv_Int = 0; jsv_Int < jsv_ValueS.length; jsv_Int++) {
        if (document.getElementById(jsv_Input + jsv_ValueS[jsv_Int]).value != "") {
            if (isNaN(document.getElementById(jsv_Input + jsv_ValueS[jsv_Int]).value)) {
                alert("������д����");
                document.getElementById(jsv_Input + jsv_ValueS[jsv_Int]).focus();
                return false;
            }
        }
    }
}

//���ؼ��临��ֵ
function pubjs_FormCopyValue(jsv_Input, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }
    document.getElementById(jsv_Input + jsv_Value).value = document.getElementById(jsv_Input + jsv_Value + "_Select").value;
}

//���ؼ�����������ֵ
function pubjs_FormCopyValueS(jsv_Input, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    if (jsv_Input == "0") { jsv_Input = ""; }

    jsv_ValueS = jsv_Value.split("|"); //�����ַ��ָ�
    for (jsv_Int = 0; jsv_Int < jsv_ValueS.length; jsv_Int++) {
        document.getElementById(jsv_Input + jsv_ValueS[jsv_Int]).value = document.getElementById(jsv_Input + jsv_ValueS[jsv_Int] + "_Select").value;
    }
}

//��ѡ�����˵�����ֵ
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

//���ؼ��临��ֵ
function pubjs_FormCopyValue_1(jsv_Input, jsv_Value, jsv_Value_Select) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    document.getElementById(jsv_Input + jsv_Value).value = document.getElementById(jsv_Input + jsv_Value_Select).value;
}

//ֱ�Ӹ�ֵ�������˵�
function pubjs_SelectValue_0(jsv_Input, jsv_Select, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Select_ID = document.getElementById(jsv_Input + jsv_Select); //��Ҫ�����������˵�ID
    jsv_Select_ID.options.length = 0; //������в˵�ֵ
    var jsv_AddValue = new Option("-��ѡ��-", ""); //���ӡ���ѡ����
    jsv_Select_ID.add(jsv_AddValue, 0);

    var jsv_ValueS = new Array(); //��������

    jsv_ValueS = jsv_Value.split("|"); //�����ַ��ָ�
    for (i_0 = 0; i_0 < jsv_ValueS.length; i_0++) {
        jsv_AddValue = new Option(jsv_ValueS[i_0], jsv_ValueS[i_0]);
        jsv_Select_ID.add(jsv_AddValue, i_0 + 1); //����ֵ
    }
}

//��ֵ�����������˵�
function pubjs_SelectValue_1(jsv_Input, jsv_Select_1, jsv_Select_2, jsv_Value, jsv_Default) {
    if (jsv_Default == "" || jsv_Default == null) {
        jsv_Default = "��ѡ��";
    }
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Select_1_Value = document.getElementById(jsv_Input + jsv_Select_1).value; //�����˵�ֵ
    var jsv_Select2_ID = document.getElementById(jsv_Input + jsv_Select_2); //��Ҫ�����������˵�ID
    jsv_Select2_ID.options.length = 0; //������в˵�ֵ
    var jsv_AddValue = new Option("-" + jsv_Default + "-", ""); //���ӡ���ѡ����
    jsv_Select2_ID.add(jsv_AddValue, 0);

    var jsv_Value_1S = new Array(); //��������1
    var jsv_Value_2S = new Array(); //��������2

    jsv_Value_1S = jsv_Value.split("|"); //����1�ַ��ָ�
    for (i_1 = 0; i_1 < jsv_Value_1S.length; i_1++) {
        jsv_Value_2S = jsv_Value_1S[i_1].split("^") //����2�ַ��ָ�
        if (jsv_Select_1_Value == jsv_Value_2S[0]) {
            jsv_AddValue = new Option(jsv_Value_2S[1], jsv_Value_2S[1]);
            jsv_Select2_ID.add(jsv_AddValue, i_1 + 1); //����ֵ
        }
    }
}

//��ֵ������ֵ���������˵�
function pubjs_SelectValue_2(jsv_Input, jsv_Select_1, jsv_Select_2, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Select_1_Value = document.getElementById(jsv_Input + jsv_Select_1).value; //�����˵�ֵ
    var jsv_Select2_ID = document.getElementById(jsv_Input + jsv_Select_2); //��Ҫ�����������˵�ID
    jsv_Select2_ID.options.length = 0; //������в˵�ֵ
    var jsv_AddValue = new Option("-��ѡ��-", ""); //���ӡ���ѡ����
    jsv_Select2_ID.add(jsv_AddValue, 0);

    var jsv_Value_1S = new Array(); //��������1
    var jsv_Value_2S = new Array(); //��������2

    jsv_Value_1S = jsv_Value.split("|"); //����1�ַ��ָ�
    for (i_2 = 0; i_2 < jsv_Value_1S.length; i_2++) {
        jsv_Value_2S = jsv_Value_1S[i_2].split("^") //����2�ַ��ָ�
        if (jsv_Select_1_Value == jsv_Value_2S[0]) {
            jsv_AddValue = new Option(jsv_Value_2S[1], jsv_Value_2S[2]);
            jsv_Select2_ID.add(jsv_AddValue, i_2 + 1); //����ֵ
        }
    }
}
//

//��ֵ������ֵ���������˵�_��ʱ��Ŀ
function pubjs_SelectValue_2_Gsmx(jsv_Input, jsv_Select_1, jsv_Select_2, jsv_Value) {
    if (jsv_Input == "" || jsv_Input == null) { jsv_Input = "ctl00_page_Body_"; }
    var jsv_Select_1_Value = "0";
    var jsv_Select_1_Text = document.getElementById(jsv_Input + jsv_Select_1).value; //�����˵�ֵ
    if (jsv_Select_1_Text == "��Ŀ") {
        jsv_Select_1_Value = "1";
    }
    if (jsv_Select_1_Text == "ά��") {
        jsv_Select_1_Value = "2";
    }
    var jsv_Select2_ID = document.getElementById(jsv_Input + jsv_Select_2); //��Ҫ�����������˵�ID
    jsv_Select2_ID.options.length = 0; //������в˵�ֵ
    var jsv_AddValue = new Option("-��ѡ��-", ""); //���ӡ���ѡ����
    jsv_Select2_ID.add(jsv_AddValue, 0);

    var jsv_Value_1S = new Array(); //��������1
    var jsv_Value_2S = new Array(); //��������2

    jsv_Value_1S = jsv_Value.split("|"); //����1�ַ��ָ�
    for (i_2 = 0; i_2 < jsv_Value_1S.length; i_2++) {
        jsv_Value_2S = jsv_Value_1S[i_2].split("^") //����2�ַ��ָ�
        if (jsv_Select_1_Value == jsv_Value_2S[0]) {
            jsv_AddValue = new Option(jsv_Value_2S[2], jsv_Select_1_Value + "^" + jsv_Value_2S[1]);
            jsv_Select2_ID.add(jsv_AddValue, i_2 + 1); //����ֵ
        }
    }
}
//

//��ȡ��ǰʱ��
function pubjs_DateNow() {
    var jsv_Now = new Date()
    var jsv_Year = jsv_Now.getYear()
    var jsv_Month = jsv_Now.getMonth() + 1
    var jsv_Day = jsv_Now.getDate()
    return jsv_Year + "-" + jsv_Month + "-" + jsv_Day
}
////

//��ѡ��ֵ
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

//��Ʒ���˵�
function pubjs_DepartmentGradeIDSelect(jsv_Value_1, jsv_Value_2) {
    var jsv_SelectID = document.getElementById(jsv_Value_1); //��Ҫ�����������˵�ID
    jsv_SelectID.options.length = 0; //������в˵�ֵ
    var jsv_AddValue = new Option("-��ѡ��-", ""); //���ӡ���ѡ����
    jsv_SelectID.add(jsv_AddValue, 0);
    var jsv_SelectValue = jsv_Value_2;
    var jsv_DepartmentParentIDSelects = new Array(); //��������1
    var jsv_DepartmentParentIDSelect = new Array(); //��������2
    jsv_DepartmentParentIDSelects = jsv_SelectValue.split("|"); //����1�ַ��ָ�
    for (i = 0; i < jsv_DepartmentParentIDSelects.length; i++) {
        jsv_DepartmentParentIDSelect = jsv_DepartmentParentIDSelects[i].split("^") //����2�ַ��ָ�
        if (jsv_DepartmentParentIDSelect[1] != "" && jsv_DepartmentParentIDSelect[1] != null) {
            jsv_AddValue = new Option(pubjs_StringNumber(jsv_DepartmentParentIDSelect[0], 1, "   ", "�� ") + jsv_DepartmentParentIDSelect[1], jsv_DepartmentParentIDSelect[2]);
            jsv_SelectID.add(jsv_AddValue, i + 1); //����ֵ
        }
    }
}
////

//�����ַ�
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

//�����ַ�
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