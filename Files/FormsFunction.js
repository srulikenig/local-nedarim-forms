$(document).ready(function () {

    var JsErrorCount = 0;

    window.onerror = function (msg, url, line, col, error) {
        if (GetURLParameter("test") == '1') return false;
        
        if (JsErrorCount >= 1) return false;
        if (error == 'EvalError: Possible side-effect in debug-evaluate' || error == 'SyntaxError: Invalid or unexpected token' || String(msg).indexOf("Maximum call stack size exceeded") != -1) return false;

        if (line == "1") { return false; }

        JsErrorCount += 1;
        try {
            $.ajax({
                type: "POST",
                url: "/nedarimplus/Forms/Manage.aspx?Action=JSError",
                context: Text,
                timeout: 30000,
                data: "Masof=" + encodeURIComponent(GetURLParameter("MasofId"))
                    + "&msg=" + encodeURIComponent(htmlEncode(msg))
                    + "&line=" + encodeURIComponent(line)
                    + "&col=" + encodeURIComponent(col)
                    + "&url=" + encodeURIComponent(url)
                    + "&error=" + encodeURIComponent(htmlEncode(error))
            });
        } catch (err) { }
        EAlertConfirm("שגיאת תוכנה. פנה לתמיכה טכנית", "שגיאה: " + msg)

    }

    if (GetURLParameter("test") == '1') {

        console.log("2")
        var HelpDiv = "<div style='text-align: center;color: white; position: fixed; top: 5px; left: 5px; opacity: 0.5;'>";


        HelpDiv += "<div onclick='OpenHelpMenu()' style='text-align: -webkit-left;cursor: pointer;'><div style='width: 35px; height: 5px; background-color: black; margin: 6px 0;'></div> <div style='width: 35px; height: 5px; background-color: black; margin: 6px 0;'></div> <div style='width: 35px; height: 5px; background-color: black; margin: 6px 0;'></div></div>"

        HelpDiv += ''



        HelpDiv += "<div style='display:none;' id='HelpMenuDiv'>"
        HelpDiv += "<div onclick='GetCheckDbName()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>Fields</div>"
        HelpDiv += "<div onclick='OpenVertion_Dev()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #3F51B5; border-radius: 3px;ba'>גרסת פיתוח</div>"
        HelpDiv += "<div onclick='ShowCallback()' style='cursor: pointer;font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>CallBack</div>"
        HelpDiv += "<div onclick='Fill()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>מילוי טופס</div>"
        HelpDiv += "<div onclick='GetExcel()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>אקסל</div>"
        HelpDiv += "<div onclick='Test1530()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>בדיקות - 1530</div>"
        HelpDiv += "<div onclick='Test770()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>בדיקות - 770</div>"
        HelpDiv += "<div onclick='Test2560()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>בדיקות - 2560</div>"
        HelpDiv += "<div onclick='Test899()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>בדיקות הלל - 899</div>"
        HelpDiv += "<div onclick='ShowDbName()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>Attr_DbName</div>"
        HelpDiv += "<div onclick='Resat_Form_770_1530_2560(7008068 , 770)' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>איפוס 770</div>"
        HelpDiv += "<div onclick='Resat_Form_770_1530_2560(7008068 , 1530)' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>איפוס 1530</div>"
        HelpDiv += "<div onclick='Resat_Form_770_1530_2560(0 , 2560)' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>איפוס 2560</div>"
        HelpDiv += "<div onclick='$(\"#AdminBt\").show()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #698390; border-radius: 3px;'>קישור מנהל</div>"



        HelpDiv += "</div>"



        HelpDiv += "</div>"

        //$("body").append("<div style='text-align: center;color: white; position: fixed; top: 5px; left: 5px; opacity: 0.5;'>")
        //$("body").append("<div onclick='ShowCallback()' style='cursor: pointer;font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #69839082; border-radius: 3px;'>CallBack</div>")
        //$("body").append("<div onclick='GetCheckDbName()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #69839082; border-radius: 3px;'>שדות פנויים</div>")
        //$("body").append("<div onclick='Fill()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #69839082; border-radius: 3px;'>מילוי טופס</div>")
        //$("body").append("<div onclick='GetExcel()' style='cursor: pointer; font-size: 16px; padding: 2px 9px; margin-bottom: 3px; background: #69839082; border-radius: 3px;'>אקסל</div>")
        //$("body").append("</div>")
        $("body").append(HelpDiv)
    };


    //$("body").append('<img id="TutPlusChecker" style="display:none" src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" />')
    //$('#TutPlusChecker').attr('src', 'https://www.matara.pro/nedarimplus/Forms/nedarim.png');
    //$('#TutPlusChecker').load(function () {
    //    var newImg = new Image();
    //    newImg.src = $('#TutPlusChecker').attr('src')
    //    setTimeout(function () {
    //        if (newImg.width !== 80 && newImg.height !== 80) {
    //            swal({
    //                type: "warning",
    //                title: 'להזמנת עמדת נדרים פלוס\nחייגו 03-7630543', text: "",
    //                showConfirmButton: false,
    //                allowOutsideClick: false,
    //            });
    //        };
    //    }, 3000)
    //}).error(function () {

    //});

    //if (window.navigator.userAgent.indexOf('SM-T515') > -1) {
    //    swal({
    //        type: "warning",
    //        title: 'להזמנת עמדת נדרים פלוס\nחייגו 03-7630543', text: "",
    //        showConfirmButton: false,
    //        allowOutsideClick: false,
    //    });
    //}

    var BlockList = ["1460", "1959", "746", "2180", "913", "1970", "909", "1320", "2060", "1244", "2195", "2218", "839", "1243", "1016", "2309", "2043"]

    if (window.navigator.userAgent.indexOf('SM-T515') > -1) {
        for (i = 0; i < BlockList.length; i++) {
            if (window.location.href.indexOf(BlockList[i]) > -1) {
                swal({
                    type: "",
                    title: "<img style='width: 150px; display: block; margin: -20px auto 13px;' src='https://matara.pro/nedarimplus/logo.png' alt='NedarimPlus'> טופס זה אינו פעיל בעמדת קהילות.<br/>גש לעמדת נדרים פלוס.", text: "<span>ניתן לרכוש עמדת נדרים פלוס במספר <b>03-7630543</b></span>",
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    html: true
                });
                break;
            }
        }
    }

    AppendBtOpenCreditCardList()
});


function OpenVertion_Dev() {
    window.open("https://matara.pro/" + window.location.pathname.replace('.php', '').replace('/', '').replace('.html', '').split("_")[0] + "_1.html?" + window.location.search.substring(1))
}


function BuildForm_Main(AddClientLogin, Emda, Func_AfterBuild) {

    if (Json.MainLogo !== '') { $("#MainLogo").attr('src', Json.MainLogo); } else { $("#MainLogo").attr('src', 'https://images.matara.pro/ClientsImages/' + Json.MosadId + '.jpg?1'); }
    $("#MainTitle").html(Json.MainTitle);


    if (AddClientLogin) {
        AddClientLogin("1");
    }

    if (GetURLParameter("Demo") == '1') Demo = "&Demo=1";
    MasofId = GetURLParameter("MasofId");
    ClientId = GetURLParameter("ClientId");
    Zeout = GetURLParameter("Zeout");

    if (GetURLParameter("Admin") == '1') $("#AdminBt").show();
    if (MasofId !== '') {
        $("#BackToNedarim").show();

        if (Emda == false) {
            $("#NoteEmdaClose").show();
            $("#WaitDiv2").hide();
        }
        return false;
    }


    if (Json.NeedSign == true) $("#SignAlert").show();


    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element]
        var Style = ""
        if (JsonElement.Style) Style = JsonElement.Style
        if (JsonElement.Type == "Koteret") {
            MainForm += '<div class="Koteret" style="' + Style + '">' + JsonElement.Text + '</div>'
        } else {
            var dir = "rtl"
            var Bold = ""
            if (JsonElement.Bold == true) Bold = "font-weight:bold"
            if (JsonElement.Type == 'Tel') dir = "ltr"
            var FieldName = JsonElement.fieldName
            if (JsonElement.fieldNameShow !== undefined) FieldName = JsonElement.fieldNameShow
            var Lbl = '<label for="' + JsonElement.ElementId + '" class="fieldName" style="' + Bold + ';' + Style + '">' + ((JsonElement.Mandatory == true) ? '<span id="Span_' + JsonElement.ElementId + '" style="color:indianred;">*</span>' : '<span id="Span_' + JsonElement.ElementId + '" style="color:indianred;display:none">*</span>') + FieldName + '</label><br>'
            if (JsonElement.LblHide == true) Lbl = ''
            if (JsonElement.Type == "Select") {
                var DivData = '<div id="' + JsonElement.ElementId + 'Div"  style="width:' + JsonElement.Width + '%;display:inline-block;vertical-align:bottom;text-align:right;margin-top:10px;margin-right:20px;margin-bottom: 4px;' + Style + '">' + Lbl + '<select class="SelectValLbl"  id="' + JsonElement.ElementId + '">'
                for (i = 0; i < JsonElement.SelectVal.split(",").length; i++) {
                    DivData += '<option value="' + JsonElement.SelectVal.split(",")[i].replace(/"/g, '&quot;') + '"> ' + JsonElement.SelectVal.split(",")[i] + '</option>'
                }
                DivData += '</select></div>'
                MainForm += DivData
            }
            else if (JsonElement.Type == "Margin") {
                MainForm += '<div style="height:' + JsonElement.Height + 'px"></div>'
            }
            else if (JsonElement.Type == "Hr") {
                MainForm += '<hr style="margin-right:20%;margin-left:20%;margin-top:' + JsonElement.MarginTop + 'px;margin-bottom:' + JsonElement.MarginBottom + 'px;' + Style + '" > '
            }
            else if (JsonElement.Type == "IndexNumber") {
                var SpanId = ""
                if (JsonElement.ElementId !== undefined) SpanId = "id='" + JsonElement.ElementId + "'"
                MainForm += (JsonElement.BeforeBr == true ? "<br id='" + JsonElement.ElementId + "Br' />" : '') + '<span ' + SpanId + ' style="-webkit-user-select: none;margin-top:15px;font-weight:bold;font-size:large;display:inline-block;color:#2B3A63;font-family:Assistant;background-color:cadetblue ;padding:3px 6px;color:white;font-weight:normal;border-radius:2px;margin-left: -10px;vertical-align: top;">' + JsonElement.Text + '</span>'
            } else if (JsonElement.Type == "Div") {
                MainForm += '<div  id="' + JsonElement.ElementId + '" style="' + Style + ';' + Bold + '">' + JsonElement.Text + '</div>'
            }
            else if (JsonElement.Type == "DivOpen") {
                MainForm += '<div  id="' + JsonElement.ElementId + '" style="' + Style + ';' + Bold + '">' + JsonElement.Text
            }
            else if (JsonElement.Type == "DivClose") {
                MainForm += '</div>'
            }
            else if (JsonElement.Type == "List") {
                MainForm += '<ol start=' + JsonElement.Number + ' style="-webkit-user-select:none;text-align:right;font-weight: bold;color: #2B3A63;' + (!JsonElement.Number ? 'list-style-type: disc;' : '') + ';' + Style + '"><li>' + JsonElement.Text + '</li></ol>'
            }
            else if (JsonElement.Type == "CheckBox") {


                var FieldName = JsonElement.fieldName
                if (JsonElement.fieldNameShow !== undefined) FieldName = JsonElement.fieldNameShow
                MainForm += '<div id="' + JsonElement.ElementId + 'Div" class="checkbox" style="-webkit-user-select:none;width:' + JsonElement.Width + '%;display:inline-block;vertical-align:top;text-align:right;margin:10px 20px 10px 0px;' + Style + ';' + Bold + '"><label for="' + JsonElement.ElementId + '"><input type="CheckBox" dir="' + dir + '" id="' + JsonElement.ElementId + '"/>' + ((JsonElement.Mandatory == true) ? '<span id="Span_' + JsonElement.ElementId + '" style="color:indianred;">*</span>' : '<span id="Span_' + JsonElement.ElementId + '" style="color:indianred;display:none">*</span>') + '<span id="' + JsonElement.ElementId + '_Txt" style="cursor: pointer; width: 90%; display: inline-block; vertical-align: top;padding-right: 3px;">' + FieldName + '</span></label></div>'
            }
            else if (JsonElement.Type == "textarea") {
                MainForm += '<div id="' + JsonElement.ElementId + 'Div" style="resize:none;width:' + JsonElement.Width + '%;display:inline-block;vertical-align:top;text-align:right;margin-top:10px;margin-right:20px;' + Style + '">' + Lbl + '<textarea class="TextBox"  rows="' + JsonElement.Rows + '" dir="' + dir + '" autocomplete="off" type="' + JsonElement.Type + '" style="width:90%;resize:none;" maxlength="' + JsonElement.MaxLength + '" id="' + JsonElement.ElementId + '" onfocus="ScrollUp(this)"/></div>'
            }
            else if (JsonElement.Type == "Text" || JsonElement.Type == "Tel") {
                var OnInput = ""
                if (JsonElement.Type == "Tel") OnInput = 'oninput="OnlyNumber(this.id)"'
                MainForm += '<div class="DivTelText" id="' + JsonElement.ElementId + 'Div" style="width:' + JsonElement.Width + '%;display:inline-block;vertical-align:bottom;text-align:right;margin-top:10px;margin-right:20px;">' + Lbl + '<input class="TextBox" dir="' + dir + '" autocomplete="off" type="' + JsonElement.Type + '" style="width:90%" maxlength="' + JsonElement.MaxLength + '" id="' + JsonElement.ElementId + '" onfocus="ScrollUp(this)" ' + OnInput + '/></div>'
            } else if (JsonElement.Type == "Radio" || JsonElement.Type == "Radio2") {
                var Br = ""
                if (JsonElement.br == true) Br = "<br/>"

                if (JsonElement.Type == "Radio") {
                    var DivData = '<div id="' + JsonElement.ElementId + '" style="width:' + JsonElement.Width + '%;display:inline-block;vertical-align:top;text-align:right;margin: 15px 20px 10px;' + Style + '">' + Lbl
                } else {
                    var DivData = '<div id="' + JsonElement.ElementId + '" style="display:inline-block;vertical-align:top;text-align:right">' + Lbl
                }

                for (i = 0; i < JsonElement.RadioBt.length; i++) {
                    var Show = JsonElement.RadioBt[i].Text
                    if (JsonElement.RadioBt[i].Show !== undefined) { Show = JsonElement.RadioBt[i].Show }
                    if (JsonElement.Type == "Radio") {
                        DivData += '<div id="' + JsonElement.ElementId + '_RadioLbl' + i + '" style="display:inline-block"><label class="RadioBtLbl" for="' + JsonElement.ElementId + '_Radio' + i + '" style="' + Style + ';' + (JsonElement.RadioBt[i].Bold == true ? 'font-weight:bold' : '') + '"><input id="' + JsonElement.ElementId + '_Radio' + i + '" type="radio" name="' + JsonElement.ElementId + '" value="' + JsonElement.RadioBt[i].Text.replace(/"/g, '&quot;') + '"> <span id="' + JsonElement.ElementId + '_RadioLblShow' + i + '">' + Show + '</span></label></div>' + Br
                    } else {
                        DivData += '<div  id="' + JsonElement.ElementId + '_RadioLbl' + i + '" style="display:inline-block"><label  class="RadioBtLbl2" for="' + JsonElement.ElementId + '_Radio' + i + '" ><input id="' + JsonElement.ElementId + '_Radio' + i + '" type="radio" name="' + JsonElement.ElementId + '" value="' + JsonElement.RadioBt[i].Text.replace(/"/g, '&quot;') + '"> ' + Show + '</label></div><br/>' + Br
                    }
                }
                DivData += '</div>'
                MainForm += DivData;

            }
            if (JsonElement.Br == true) MainForm += '<br/>';


            if (JsonElement.DbName !== undefined) {
                if (CheckDbName.indexOf(JsonElement.DbName) > -1) { alert("נמצא כפילות DbName ב: " + JsonElement.DbName) }
                if (JsonElement.DbName.substring(0, 5) != "Field") { alert("לא תקין DbName: " + JsonElement.DbName) }
                if (JsonElement.DbName.indexOf("Max") > -1) {
                    if ($.isNumeric(JsonElement.DbName.split('Field')[1].split('Max')[0]) == false || JsonElement.DbName.split('Field')[1].split('Max')[1] != "") { alert("לא תקין DbName: " + JsonElement.DbName) }
                    if (JsonElement.DbName.split('Field')[1].split('Max')[0] < 1 || JsonElement.DbName.split('Field')[1].split('Max')[0] > 10) { alert("נמצא חריגה  DbNameMax: " + JsonElement.DbName) }
                }
                else if ($.isNumeric(JsonElement.DbName.split('Field')[1]) == false) { alert("לא תקין DbName: " + JsonElement.DbName) }
                if (parseInt(JsonElement.DbName.split("Field")[1]) > 100) { alert("נמצא חריגה DbName ב: " + JsonElement.DbName) }
                CheckDbName.push(JsonElement.DbName)
            }

            if (JsonElement.ElementId !== undefined) {
                if (CheckElementId.indexOf(JsonElement.ElementId) > -1) { alert("נמצא כפילות ElementId ב: " + JsonElement.ElementId) }
                CheckElementId.push(JsonElement.ElementId);
            }

            if (JsonElement.ElementId == "CreditCard" || JsonElement.ElementId == "CardExpiration") {
                if ((Json.SpecialCheck.indexOf("CreditCardPayment") < 0) && (Json.SpecialCheck.indexOf("CreditCardToken") < 0)) { alert("לא קיימת שליחת אשראי.") }
                if (JsonElement.DbName && JsonElement.ElementId == "CreditCard" && (Json.SpecialCheck.indexOf("CreditCardToken:" + JsonElement.DbName) < 0)) { alert("כרטיס אשראי נשלח ללא CreditCardToken") }
            }
        }
    }

    if (Func_AfterBuild) {
        Func_AfterBuild();
    }


}



function ParsePreData_Global(data) {
    if (data.Message == 'NOT FOUND') {
        //EAlertConfirm("מספר הזהות לא נמצא במערכת")
        //$("#AllMainForm").html('<div style="font-size: 19px;text-align: center;color: indianred; font-weight: bold;font-family: Assistant;margin-top: 50px;margin-bottom: 150px;"><span style="font-size:24px"></span>מספר הזהות לא נמצא במערכת</div>');
        $('#ZeoutCheck').hide();
        $('#AllMainForm').show();
    } else {
        var PreDataJson = data.Message.split("ǂ");
        $('#Family').val(PreDataJson[1])

        $('#ZeoutCheck').hide();
        $('#AllMainForm').show();

    }

    //var num = 1;
    //for (var Element in Json.FormElements) {
    //    var JsonElement = Json.FormElements[Element]

    //    if (JsonElement.Type == "Margin" || JsonElement.Type == "List" || JsonElement.Type == "Koteret") { continue; }
    //    if (JsonElement.ElementId == undefined || JsonElement.DbName == undefined) { continue; }

    //    console.log(num + " | " + JsonElement.ElementId + " | " + JsonElement.fieldName)

    //    num++
    //}

}


 


function GetOldTofesData_Global() {

    if (Json.AllowChanges !== true) {
        GetPreData();
        return false;
    }

    if (parent.ClientJson) {
        ClientJson = parent.ClientJson;
    }

    $("#AllMainForm").hide();
    $("#WaitDiv2").show()
    $.ajax({
        url: "/nedarimplus/Forms/Manage.aspx?Action=GetOldTofesData&MosadId=" + Json.MosadId + "&TofesId=" + Json.TofesId,
        data: "SessionId=" + encodeURIComponent(ClientJson.SessionId) + "&SessionPass=" + encodeURIComponent(ClientJson.SessionPass) + "&ClientId=" + encodeURIComponent(ClientJson.ID),
        type: 'POST',
        context: Text,
        timeout: 60000,
    }).success(function (JsonData) {
        $("#WaitDiv2").hide()
        $("#AllMainForm").show();

        if (JsonData.Status == 'Error' && JsonData.Message == 'NOT FOUND') {
            return false;
        }

        OldTofesId = JsonData.ID;
        $("#EditNote").show();

        for (var Element in Json.FormElements) {
            var JsonElement = Json.FormElements[Element]
            if (JsonElement.DbName !== undefined) {

                if (JsonElement.Type == 'CheckBox') {
                    if (JsonData[JsonElement.DbName] == "מסומן") { $("#" + JsonElement.ElementId).prop('checked', true); }
                } else if (JsonElement.Type == 'Radio') {
                    for (i = 0; i < JsonElement.RadioBt.length; i++) {
                        if (JsonElement.RadioBt[i].Text == JsonData[JsonElement.DbName]) { $("#" + JsonElement.ElementId + '_Radio' + i).prop('checked', 'checked') }
                    }
                } else {
                    $("#" + JsonElement.ElementId).val(JsonData[JsonElement.DbName])
                }

            }

        }
        Calculate()
    }).error(function () {

        var BtTex = 'חזרה לנדרים פלוס'
        if (MasofId == '') BtTex = 'אישור'
        swal({
            title: "שגיאה בקבלת נתונים. בדוק תקשורת",
            type: "error",
            showCancelButton: false,
            confirmButtonText: BtTex,
            closeOnConfirm: true,
            allowOutsideClick: false,
        }, function (isConfirm) {
            if (MasofId !== '') { parent.GoToMenu("Tafrit"); parent.closeIFrame() } else { $('html, body').scrollTop(0); location.reload(); }
        });

    });
}


function SignCancel() {
    $('#SignPad,#WaitDiv').hide();
    $('#SaveDiv').show();
}



function OpenHelpMenu() {
    if (IsVisible("HelpMenuDiv")) {
        $("#HelpMenuDiv").hide();
    } else {
        $("#HelpMenuDiv").show();
    }
}


function ScrollUp(Input, Top) {
    if ($(Input).html() == undefined) return false;
    if (Top == undefined) Top = 200
    if ($(Input).attr('type') == undefined) {
        $('html, body').animate({ scrollTop: $(Input).position().top - Top }, 'slow');
    }
    else {
        $('html, body').animate({ scrollTop: $(Input).parent().position().top - Top }, 'slow');
    }
}


function work(num, total) {
    var Hour = parseInt(num / 180)
    var Minutes = (60 * ((num / 180) % 1)).toFixed(0)
    console.log("Max: " + Hour + ":" + Minutes);
    var TLeft = ((Hour * 60) + +Minutes) - +total
    console.log("TLeft: " + TLeft);
}


function validatePhone(phone) {
    //02,03,04,08,09
    var re = /^[0][2|3|4|8|9]{1}[0-9]{7}$/g;
    if (re.test(phone)) {
        return true;
    }
    //07
    re = /^[0][7][0-9]{1}[0-9]{7}$/g;
    if (re.test(phone)) {
        return true;
    }
    //mobilePhone
    re = /^[0][5][0|1|2|3|4|5|6|8|9]{1}[0-9]{7}$/g;
    if (re.test(phone)) {
        return true;
    }
    return false;
}


function CallbackJson() {
    var Txt = "{";
    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element]
        if (JsonElement.DbName !== undefined) {
            Txt += '"' + JsonElement.ElementId + '":"[' + JsonElement.DbName + ']",'

        }
    }
    Txt = Txt.substr(0, Txt.length - 1)
    Txt += '}'

    console.log(Txt)
}


function Validate_Email(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //if (input.match(validRegex)) {
    if (validRegex.test(input)) {
        return true;
    } else {
        return false;
    }
}



function Get_Time() {
    $.ajax({
        url: "/nedarimplus/Forms/Manage.aspx?Action=GetTime",
        context: Text,
        timeout: 180000,
    }).success(function (JsonData) {
        console.log(JsonData)
    }).error(function () {
        console.log("Error on Get_Time()")
    });
}


//ייצוא לאקסל בסדר מסויים
//Must add "Order" to each elemnt in the main Json.
function Get_Ordered_Excel() {
    var url = "Manage.aspx?Action=GetExcel&MosadId=" + Json.MosadId + "&TofesId=" + Json.TofesId
    var FormData = '<form action="' + url + '" method="post" target="_blank" style="display:none">'

    var ExcelJson = [];
    for (var Item in Json.FormElements) {
        if (Json.FormElements[Item].DbName) {
            if ($.isNumeric(Json.FormElements[Item].Order) == false) {
                alert("שגיאה סדר בשדה: " + Json.FormElements[Item].fieldName + ". נא לפנות למחלקת טפסים.")
            } else {
                ExcelJson.push(Json.FormElements[Item])
            }
        }
    }

    ExcelJson.sort(function (a, b) {
        if (a.Order < b.Order) return -1;
        if (a.Order > b.Order) return 1;
        return 0;
    })

    for (var Element in ExcelJson) {
        var JsonElement = ExcelJson[Element]
        if (JsonElement.Type == "Margin" || JsonElement.Type == "List" || JsonElement.Type == "Koteret" || JsonElement.DbName == undefined) { continue; }
        FormData += '<input type="text" name="' + JsonElement.DbName + '" value="' + JsonElement.fieldName.replace(/"/g, '&quot;').replace(/<b>/g, '').replace(/<\/b>/g, '') + '" />'

    }

    FormData += '</form>'
    var form = $(FormData);
    $('body').append(form);
    form.submit();
}




function Get_Double_Unit(A, B) {
    A = +A; B = +B;
    var Double = ((A + B) - Math.abs(A - B)) / 2;
    var Unit = Math.max(A, B) - Math.min(A, B);
    var A_Unit = A > B ? Unit : 0;
    var B_Unit = B > A ? Unit : 0;
    return [A_Unit, B_Unit, Double]
}




function Special_Check() {

    var Special_Check = ["Zeout", "Phone", "Date", "Mail"]

    for (var Elem in Special_Check) {
        window["Check_" + Special_Check[Elem]] = [];
    }

    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element]
        for (var Elem in Special_Check) {
            if (JsonElement.ElementId !== undefined) {
                if (JsonElement.ElementId.indexOf(Special_Check[Elem]) !== -1) {
                    window["Check_" + Special_Check[Elem]].push(JsonElement.DbName)
                }
            }
        }
    }

    var Txt = "";
    for (var Elem in Special_Check) {
        if (window["Check_" + Special_Check[Elem]].length !== 0) {
            Txt += Special_Check[Elem] + ":";
            for (var Check in window["Check_" + Special_Check[Elem]]) {
                Txt += window["Check_" + Special_Check[Elem]][Check] + ","
            }
            Txt = Txt.substring(0, Txt.length - 1)
            Txt += ";"
        }
    }

    console.log(Txt)
}


function ShuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};


function Check_Tofes_Version(DivName, MyFunc) {
    $.ajax({
        url: "/nedarimplus/Forms/Manage.aspx?Action=CheckVersion&MosadId=" + Json.MosadId + "&TofesId=" + Json.TofesId,
        context: Text,
        timeout: 60000,
    }).success(function (JsonData) {
        if (JsonData.Status == "Error") {
            $("#WaitDiv2").hide()
            EAlertConfirm(JsonData.Message);
            return false;
        } else if (JsonData.Status == "OK") {
            if (Json.Version !== JsonData.Message) {
                if ((GetURLParameter("CheckVersion") == JsonData.Message && window.location.href.indexOf("CheckVersion") !== -1) || window.location.href.split("CheckVersion").length > 1) {
                    $("#WaitDiv2").hide()
                    $("#" + DivName).html('<div style="font-size: 19px;text-align: center;color: indianred; font-weight: bold;font-family: Assistant;margin-top: 50px;margin-bottom: 150px;"><span style="font-size:24px"></span>גרסת הטופס לא מעודכנת.<br />ניתן לנסות להכנס שוב בעוד מספר דקות.<br /><br /><span style="font-weight:normal">במידה והתקלה ממשיכה, יש לפנות לתמיכה טכנית.</span></div>');
                    $("#" + DivName).show();
                    EAlertConfirm("גרסת הטופס לא מעודכנת.");
                } else {
                    var Connect = window.location.href.indexOf("?") !== -1 ? "&" : "?";
                    window.location.href = window.location.href + Connect + 'CheckVersion=' + JsonData.Message;
                }
            } else {
                if (MyFunc) {
                    MyFunc();
                } else {
                    $("#WaitDiv2").hide();
                    $("#" + DivName).show();
                }

                //$("#WaitDiv2").hide();
                //$("#" + DivName).show();
            }
        }
    }).error(function () {
        EAlertConfirm("שגיאה בקבלת נתונים. בדוק תקשורת")
    });
}



function Get_Date_Different_Days(Start, End) { //getDate("20/06/2023",'Today')
    // Formt - 24/02/2020
    if (End == 'Today') {
        End = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()
    }
    if (Start == 'Today') {
        Start = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()
    }

    var date1 = Start.split('/')
    var date2 = End.split('/');

    date1 = new Date(date1[2], date1[1], date1[0]);
    date2 = new Date(date2[2], date2[1], date2[0]);

    date1 = parseInt(date1.getTime() / 1000);
    date2 = parseInt(date2.getTime() / 1000);

    return ((date2 - date1) / 60 / 60 / 24).toFixed()
}


function AddDaysToDate(Days) {
    var DateToday = new Date();
    DateToday.setDate(DateToday.getDate() + Days);
    return DateToday.getDate()
}

//Mail
function AutoFillMail(Id) {
    var AllId = Id.split(',')
    for (Id = 0; Id < AllId.length; Id++) {
        (function (Id) {
            $('body').append('<div id="MailHelperDiv_' + AllId[Id] + '" style="position: relative">'
                + '<div style="font-size: small; position: absolute; left: 9%; user-select: none; z-index: 1; background-color: white; box-shadow: rgb(158 158 158 / 55%) 0px 0px 3px 0px; padding: 0.5px 2px; display: none; border-radius: 3px; width: 115px;" id="MailHelper_' + AllId[Id] + '">'
                + '<div dir="ltr">'
                + '<div style="background-color: #f7f7f7; padding: 4px 9px; border-radius: 3px; margin: 2px auto; cursor: pointer; font-size: 15px; display: block; box-sizing: border-box; color: gray; border: 1px solid #e7e7e7; width: 100%; text-align: left;" onclick="$(\'#' + AllId[Id] + '\').val($(\'#' + AllId[Id] + '\').val().split(\'@\')[0] + \'@gmail.com\')">@gmail.com</div>'
                + '<div style="background-color: #f7f7f7; padding: 4px 9px; border-radius: 3px; margin: 2px auto; cursor: pointer; font-size: 15px; display: block; box-sizing: border-box; color: gray; border: 1px solid #e7e7e7; width: 100%; text-align: left;" onclick="$(\'#' + AllId[Id] + '\').val($(\'#' + AllId[Id] + '\').val().split(\'@\')[0] + \'@hotmail.com\')">@hotmail.com</div>'
                + '<div style="background-color: #f7f7f7; padding: 4px 9px; border-radius: 3px; margin: 2px auto; cursor: pointer; font-size: 15px; display: block; box-sizing: border-box; color: gray; border: 1px solid #e7e7e7; width: 100%; text-align: left;" onclick="$(\'#' + AllId[Id] + '\').val($(\'#' + AllId[Id] + '\').val().split(\'@\')[0] + \'@bezeqint.net\')">@bezeqint.net</div>'
                + '<div style="background-color: #f7f7f7; padding: 4px 9px; border-radius: 3px; margin: 2px auto; cursor: pointer; font-size: 15px; display: block; box-sizing: border-box; color: gray; border: 1px solid #e7e7e7; width: 100%; text-align: left;" onclick="$(\'#' + AllId[Id] + '\').val($(\'#' + AllId[Id] + '\').val().split(\'@\')[0] + \'@okmail.co.il\')">@okmail.co.il</div>'
                + '</div></div></div>')

            document.getElementById(AllId[Id] + 'Div').appendChild(document.getElementById('MailHelperDiv_' + AllId[Id]))

            $('#' + AllId[Id]).focus(function () {
                $('#MailHelper_' + AllId[Id]).show();
            }).focusout(function () {
                if (!$('#MailHelperDiv_' + AllId[Id]).is(':hover')) {
                    $('#MailHelper_' + AllId[Id]).hide();
                }
            }).css("text-align", "left").css("direction", "ltr");

            $('#MailHelperDiv_' + AllId[Id]).click(function () {
                $('#MailHelper_' + AllId[Id]).hide();
            })
        })(Id);
    }
}


function FuntoFixed(Num) {
    Num = String(Num)
    if (Num.split('.').length > 1) {
        if (Num.split('.')[1].length > 1) {
            Num = (+Num).toFixed(2)
        } else {
            Num = (+Num).toFixed(1)
        }
    } else {
        Num = Num
    }
    return +Num
}



//Check Valid Date dd/mm/yyyy
function CheckDate(txt) {
    if (txt) {
        txt = txt.split('/')[1] + "/" + txt.split('/')[0] + "/" + txt.split('/')[2]
        return /((^(10|12|0?[13578])([/])(3[01]|[12][0-9]|0?[1-9])([/])((1[8-9]\d{2})|([2-9]\d{3}))$)|(^(11|0?[469])([/])(30|[12][0-9]|0?[1-9])([/])((1[8-9]\d{2})|([2-9]\d{3}))$)|(^(0?2)([/])(2[0-8]|1[0-9]|0?[1-9])([/])((1[8-9]\d{2})|([2-9]\d{3}))$)|(^(0?2)([/])(29)([/])([2468][048]00)$)|(^(0?2)([/])(29)([/])([3579][26]00)$)|(^(0?2)([/])(29)([/])([1][89][0][48])$)|(^(0?2)([/])(29)([/])([2-9][0-9][0][48])$)|(^(0?2)([/])(29)([/])([1][89][2468][048])$)|(^(0?2)([/])(29)([/])([2-9][0-9][2468][048])$)|(^(0?2)([/])(29)([/])([1][89][13579][26])$)|(^(0?2)([/])(29)([/])([2-9][0-9][13579][26])$))/.test(txt)
    }
    return false
}


// ZeoutCheck
function ValidateID(str) {
    var IDnum = String(str);
    if ((IDnum.length > 9) || (IDnum.length < 5)) return false;
    if (isNaN(IDnum)) return false;
    if (IDnum.length < 9) while (IDnum.length < 9) IDnum = '0' + IDnum;
    var mone = 0;
    var incNum;
    for (var i = 0; i < 9; i++) {
        incNum = Number(IDnum.charAt(i));
        incNum *= (i % 2) + 1;
        if (incNum > 9) incNum -= 9;
        mone += incNum;
    }
    if (mone % 10 == 0) return true; else return false
}




//Convert input to Date as 28\01\2022
function FormatDate(idElement) {
    var idElement = idElement.split(',')
    for (Id = 0; Id < idElement.length; Id++) {
        (function (Id) {
            $('#' + idElement[Id]).on('input', function (e) {
                var TempDate = $(this).val()
                var ArrayLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/']
                var total = ''
                TempDate = TempDate.split('')
                for (i = 0; i < TempDate.length; i++) {
                    if (ArrayLetters.indexOf(TempDate[i]) > -1) {
                        total += TempDate[i]
                    }
                }
                $(this).val(total)
            }).bind('keyup', function (e) {
                if ($(this).val().split("/").length == 3) {
                    return false;
                }
                var TempDate = $(this).val().replace(/\//g, "")
                var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
                if (key !== 8 && key !== 46 && key !== 0) {
                    if ($.isNumeric(TempDate)) {
                        if (TempDate.length >= 4) {
                            TempDate = TempDate.substr(0, 2) + "/" + TempDate.substr(2, 2) + "/" + TempDate.substr(4)
                        } else if (TempDate.length >= 2) {
                            TempDate = TempDate.substr(0, 2) + "/" + TempDate.substr(2)
                        }
                        $(this).val(TempDate)
                    }
                }
            }).attr("dir", "ltr").attr("maxlength", "10")
        })(Id);
    }
}


//Convert input to Time as 12:04
function FormatTime(idElement) {
    var idElement = idElement.split(',')
    for (Id = 0; Id < idElement.length; Id++) {
        (function (Id) {
            $('#' + idElement[Id]).on('input', function (e) {
                var TempDate = $(this).val()
                var ArrayLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':']
                var total = ''
                TempDate = TempDate.split('')
                for (i = 0; i < TempDate.length; i++) {
                    if (ArrayLetters.indexOf(TempDate[i]) > -1) {
                        total += TempDate[i]
                    }
                }
                $(this).val(total)
            }).bind('keyup', function (e) {
                var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
                if (key !== 8 && key !== 46 && key !== 0) {
                    var TempDate = $(this).val()
                    if ($.isNumeric(TempDate)) {
                        if (TempDate.length >= 2) {
                            if (TempDate.indexOf(":") == -1) {
                                TempDate = TempDate.substr(0, 2) + ":" + TempDate.substr(2)
                            }
                        }
                        $(this).val(TempDate)
                    }
                }
            }).attr("dir", "ltr").attr("maxlength", "5")
        })(Id);
    }
}


// OpenPage
function NavigateToPage(PageNum) {
    if (PageNum !== "" && PageNum !== undefined) {
        if (MasofId == "") {
            window.location.href = PageNum + '.html'
        } else {
            window.location.href = PageNum + '.html?MasofId=' + MasofId + '&ClientId=' + ClientId + '&Zeout=' + Zeout + "&Version=10";
        }
    }
}


//Type Count / AllowCount:Field1; | Sum  / AllowSum:Field1;
function GetCountSum(Type, FiledName, AfterFunction) {
    $.ajax({
        url: "/nedarimplus/Forms/Manage.aspx?Action=GetSumCount&TofesId=" + Json.TofesId + "&FiledName=" + FiledName + "&Type=" + Type,
        context: Text,
        timeout: 60000,
    }).success(function (JsonData) {
        if (AfterFunction) AfterFunction(JsonData);

        return JsonData.Message
    }).error(function () {
        EAlertConfirm("שגיאה בקבלת נתונים. בדוק תקשורת")
        return false
    })
}


//TofesStatus Active
function GetTofesStatus(AlertMessageHtml) {
    $.ajax({
        url: "/nedarimplus/Forms/Manage.aspx?Action=GetStatus&&TofesId=" + Json.TofesId,
        context: Text,
        timeout: 60000,
    }).success(function (JsonData) {
        if (JsonData.Message == 'False') {
            //var AlertMessage = '<div style="font-size: 19px;text-align: center;color: indianred; font-weight: bold;font-family: Assistant;margin-top: 20px;margin-bottom: 15px;"><span style="font-size:24px">שים לב!</span><br>טופס זה לא פעיל.</div>'
            //if (AlertMessageHtml !== '' && AlertMessageHtml !== undefined) {
            //    AlertMessage = AlertMessageHtml;
            //}
            //$("#AllMainForm").html(AlertMessage);
            swal({
                type: "error",
                title: 'שים לב! טופס זה לא פעיל',
                html: true,
                showConfirmButton: true,
                allowOutsideClick: false,
            });
        }
    })
}


//OnlyHebrew
function onlyHe(id) {
    var id = id.split(',')
    for (J = 0; J < id.length; J++) {
        (function (J) {
            $(id[J]).on('input', function () {
                var value = $(id[J]).val().split('')
                var text = ""
                for (i = 0; i < value.length; i++) {
                    if (value[i].search('[\u0590-\u05FF \u0020]') != -1) {
                        text += value[i]
                    }
                }
                $(id[J]).val(text)
            })
        })(J);
    }
}


//OnlyNumber
//function OnlyNumber(id) {
//    var id = id.split(',')
//    for (J = 0; J < id.length; J++) {
//        (function (J) {
//            $("#" + id[J]).on('input', function () {
//                var value = $("#" + id[J]).val().split('')
//                var text = ""
//                for (i = 0; i < value.length; i++) {
//                    if (value[i].search('[0-9]') != -1) {
//                        text += value[i]
//                    }
//                }
//                $("#" + id[J]).val(text)
//            })
//        })(J);
//    }
//}


var OnlyNumberIdList = []
function OnlyNumber(id) {
    var id = id.split(',')
    for (J = 0; J < id.length; J++) {
        (function (J) {
            if (OnlyNumberIdList.indexOf(id[J]) == -1) {
                OnlyNumberIdList.push(id[J])
                $("#" + id[J]).on('input', function () {
                    var value = $("#" + id[J]).val().split('')
                    var text = ""
                    for (i = 0; i < value.length; i++) { if (value[i].search('[0-9]') != -1) { text += value[i] } }
                    $("#" + id[J]).val(text)
                })

                var value = $("#" + id[J]).val().split('')
                var text = ""
                for (i = 0; i < value.length; i++) { if (value[i].search('[0-9]') != -1) { text += value[i] } }
                $("#" + id[J]).val(text)
            }
        })(J);
    }
}




// After Hide SaveDiv
function MySwal(Text, Id, Type) {
    swal({
        type: Type || "error",
        title: Text,
        html: true,
        showConfirmButton: true,
        allowOutsideClick: false,
    }, function () {
        if (Id) {
            $('#' + Id).focus()
            $('#' + Id).select();
            ScrollUp('#' + Id)
        }
        setTimeout(function () {
            $("#SaveDiv").show()
            $("#WaitDiv").hide()

            if ($(".sweet-alert").css('display') == "none") {
                document.body.classList.remove('stop-scrolling');
            }
        }, 100);
    });
    return false;
}


//Set Field Mandatory Status
function DbNameMandatory(ElementId, Status) {
    for (Elem in Json.FormElements) {
        if (Json.FormElements[Elem].ElementId == ElementId) {
            if (Status == 'Mandatory') {
                Json.FormElements[Elem].Mandatory = true;
                $('#Span_' + ElementId).show()
            } else if (Status == 'NotMandatory') {
                Json.FormElements[Elem].Mandatory = false;
                $('#Span_' + ElementId).hide()
            }
        }
    }
}

function htmlDecode(value) {
    return $("<textarea/>").html(value).text();
}

function AddBankList(AllId) {

    if (AllId == undefined || AllId == "Bank_Div" || AllId == "BankDiv") {
        AllId = "Bank";
        $('#SnifDiv').css("vertical-align", "top");
        $('#AccountDiv').css("vertical-align", "top");
    }




    var AllId = AllId.split(',')
    for (Id = 0; Id < AllId.length; Id++) {
        $('body').append(
            '<div id="BankPickerDiv_' + AllId[Id] + '" style="display: none; position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.5);">\
                        <div style="padding: 20px; border: 1px solid #888; color: #808080; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; border-radius: 20px; width: 95%; max-width: 398px; box-sizing: border-box; margin: 20px auto;">\
                        <div style="-webkit-user-select:none; float:right; width:40px; line-height: 40px; text-align: center; border-radius: 10px; background-color: salmon; color: white; font-size: large; font-weight: bold; cursor: pointer; margin: -10px; position: absolute;" onclick="$(this).parent().parent().hide()">X</div>\
                        <div style="font-family: inherit; text-align: center; font-weight: bold; padding-top: 10px; font-size: 26px;margin-bottom:20px">רשימת בנקים</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'13\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק אגוד - 13</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'14\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק אוצר החייל - 14</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'11\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק דיסקונט - 11</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'09\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק הדואר - 09</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'12\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק הפועלים - 12</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'04\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק יהב - 04</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'54\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק ירושלים - 54</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'10\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק לאומי - 10</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'20\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק מזרחי טפחות - 20</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'46\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק מסד - 46</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'17\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק מרכנתיל דיסקונט - 17</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'52\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק פאג&quot;י (פועלי אגודת ישראל) - 52</div>\
                        <div style="border: 1px solid #dbdbdb; background-color: white; font-weight: bold; color: cadetblue; cursor: pointer; -webkit-user-select: none !important; font-size: 17px; text-align: right; margin: 3px auto; max-width: 350px; width: 90%; padding: 7px 24px; box-sizing: border-box; border-radius: 3px;" onclick="$(\'#'+ AllId[Id] + '\').val(\'31\'); $(\'#BankPickerDiv_' + AllId[Id] + '\').hide()">בנק הבנלאומי - 31</div>\
                    </div></div>')

        $('#' + AllId[Id] + 'Div').append(
            '<div><span style="display: inline-block;padding: 2px 10px;background-color: aliceblue;border-radius: 5px;font-family: Assistant;margin-right: 5px;color: rgb(86,130,171);margin-top: 3px;border: 1px solid darkgrey;font-size: 15px;cursor: pointer;user-select: none;" onclick="$(\'#BankPickerDiv_' + AllId[Id] + '\').show()">הצג רשימה</span></div>'
        )
    }
}



function AddLogin(Type, ElementId) {
    AddClientHtml();

    if (Type == 'NotMandatory') {
        if (Zeout !== '') {
            Add_Client_Dt()
        } else {
            $('#WaitDiv2').after(
                '<div id="Client_Div" style="margin-right:7px;color:#808080;font-size:small;">משתמש רשום? <span style="cursor: pointer; color: cornflowerblue;" onclick="Client_Dt()">לחץ כאן</span></div >'
            )
            document.getElementById(ElementId).appendChild(document.getElementById('Client_Div'))
        }

    } else if (Type == 'Mandatory') {
        $('#WaitDiv2').after(
            '<div id="ComputerNote" style="text-align:center;font-size:18px;color:indianred;font-weight:bold;font-family:Assistant;display:none;margin-top:20px;margin-bottom: 40px;"><span style="font-size:24px;">שים לב!</span><br />טופס זה ניתן למילוי ע"י משתמשים רשומים בנדרים בלבד.<div><div class="Bt" style="display:inline-block;margin-top:20px" onclick="OpenLogIn(\'\', false, function () { ClientId = ClientJson.ID; Zeout = ClientJson.Zeout; GetOldTofesData(); $(\'#AllMainForm\').show();$(\'#ComputerNote\').hide(); })">לזיהוי לחץ כאן</div></div></div>'
        )
        var Special = GetURLParameter("Special");
        var MasofId = GetURLParameter("MasofId");
        if (Special != 1 && MasofId == '') {
            $("#ComputerNote").show();
            $("#AllMainForm").hide();
        } else {
            $("#ComputerNote").hide();
            $("#AllMainForm").show();
        }
    }
}




function CreatingPopUpWindowJson(Data) {
    //CreatingPopUpWindowJson({
    //    ElementId: 'Shiur',
    //    TitleWindow: "שיעור",
    //    JsonList: [{ "Code": "344", "Name": "ר' פינס אפרים" }, { "Code": "338", "Name": "ר' פרקוביץ אברהם ישעיה" }, { "Code": "295", "Name": "ר' פרידמן שמואל" }, { "Code": "292", "Name": "ר' קרלבך בנימין" }, { "Code": "298", "Name": "ר' כלתי נתנאל" }, { "Code": "330", "Name": "ר' וגשל יהודה" }, { "Code": "307", "Name": "ר' מנס יצחק" }, { "Code": "350", "Name": "ר' רבין" }, { "Code": "342", "Name": "ר' פרידמן משה אהרן" }, { "Code": "287", "Name": "ר' אזרחי" }, { "Code": "296", "Name": "ר' רזניק אלי" }, { "Code": "305", "Name": "ר' כץ יעקב משה" }, { "Code": "334", "Name": "ר' קרפף אלימלך" }, { "Code": "2741", "Name": "בלוך ר' שמשון" }, { "Code": "2323", "Name": "אריאלי רא אידיש" }, { "Code": "308", "Name": "ר' מרק אברהם" }, { "Code": "337", "Name": "ר' הירשלר יוסף" }, { "Code": "351", "Name": "ר' הלמן" }, { "Code": "346", "Name": "ר' שמואלביץ אברהם" }, { "Code": "329", "Name": "ר' פרידמן עקיבא" }, { "Code": "343", "Name": "ר' המונד" }],
    //    TextLine: "מדינה: [Name] | קוד: [Code]",
    //    KeyPast: "Name",
    //    SearchKey: ["Name", "Code"],
    //    DeleteDuplicatesKey: ["Name", "Code"],
    //    SortKey: "Name",
    //    Focus: true,
    //    OtherText: "אחר",
    //    ShowMaxResults: 1000,
    //    Function_After_Selection: function (Response) {
    //        if (Response == "אחר") {
    //            $("#Shiur_Code").val('')
    //        } else {
    //            $("#Shiur_Code").val(Response.Code)
    //        }
    //    }
    //})


    var html = ''
    html += '<div id="PopUpWindow_' + Data.ElementId + '" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.5);display:none;">'
    html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 500px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
    html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" onclick="$(this).parent().parent().hide()" >X</span>'
    html += '<div style="text-align:center">'
    html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 18px; -webkit-user-select: none; text-align: center; padding: 0;">' + (Data.Koteret_Txt ? Data.Koteret_Txt : 'בחר ') + Data.TitleWindow + ':</div>'
    html += '<input id="PopUpWindowSearch_' + Data.ElementId + '" style="-webkit-appearance: none; font-size: large; color: #3f475e; text-align: center; padding: 6px; border-color: #f7bb4d; border-style: solid; border-width: 0px 0px 2px 0px; margin: 5px 5px; background-color: #FFFFFB; -webkit-box-sizing: border-box;margin-top: -7px;display:none;" type="text" placeholder="חפש ' + Data.TitleWindow + '" />'
    html += '<div id="CardFixedCount_' + Data.ElementId + '" style="padding: 5px 0 13px;display:none">סה"כ תוצאות: <span></span></div>'
    html += '<table id="PopUpWindowTable_' + Data.ElementId + '" style="text-align:center;width:95%;font-size:medium;background-color:white"></table>'
    html += '</div></div></div>'

    $('body').append(html)

    $("#" + Data.ElementId).focus(function () {
        $("#PopUpWindow_" + Data.ElementId).show()
        $("#" + Data.ElementId).blur()
        $('#PopUpWindowSearch_' + Data.ElementId).val('')
        PopUpWindowSearch()
        if (Data.Focus == true) {
            $('#PopUpWindowSearch_' + Data.ElementId).focus()
        }
    });


    if (Data.OtherText != "") {
        $("#" + Data.ElementId + 'Div').append('<div style="display:none;" id="' + Data.ElementId + '_BtOpenList"><span style="display: inline-block;padding: 2px 10px;background-color: aliceblue;border-radius: 5px;font-family: Assistant;margin-right: 5px;color: rgb(86,130,171);border: 1px solid darkgrey;font-size: 15px;cursor: pointer;user-select: none;">הצג רשימה</span></div>');

        $("#" + Data.ElementId + '_BtOpenList span').click(function () {
            $("#PopUpWindow_" + Data.ElementId).show()
            $('#PopUpWindowSearch_' + Data.ElementId).val('')
            PopUpWindowSearch()
            if (Data.Focus == true) {
                $('#PopUpWindowSearch_' + Data.ElementId).focus()
            }
        });
    }



    if (Data.DeleteDuplicatesKey.length > 0) {
        for (Key = 0; Key < Data.DeleteDuplicatesKey.length; Key++) {

            var NewJson = []
            var TestDuplicates = []

            for (i = 0; i < Data.JsonList.length; i++) {
                if (TestDuplicates.indexOf(Data.JsonList[i][Data.DeleteDuplicatesKey[Key]]) == -1) {
                    TestDuplicates.push(Data.JsonList[i][Data.DeleteDuplicatesKey[Key]])
                    NewJson.push(Data.JsonList[i])
                }
            }
            Data.JsonList = NewJson
        }
    }


    if (Data.SortKey != "") {
        Data.JsonList.sort(function(a, b) {
            var numA = (isNaN(a[Data.SortKey]) ? null : Number(a[Data.SortKey]));
            var numB = (isNaN(b[Data.SortKey]) ? null : Number(b[Data.SortKey]));

            if (numA !== null && numB !== null) {
                return numA - numB;
            } else if (numA !== null) {
                return 1;
            } else if (numB !== null) {
                return -1;
            } else {
                return (a[Data.SortKey].toLowerCase()  > b[Data.SortKey].toLowerCase()  ? 1 : -1); // טקסטים בסדר עולה
            }
        })
    }





    function PopUpWindowSearch() {
        $('#PopUpWindowTable_' + Data.ElementId).html('')
        if (Data.OtherText != "" && Data.OtherTextTopList == true) {
            AddOtherText()
        }

        var KeyWord = $('#PopUpWindowSearch_' + Data.ElementId).val().split(' ')
        var Counter = 0
        for (var i = 0; i < Data.JsonList.length; i++) {
            var Exist = true
            for (var j = 0; j < KeyWord.length; j++) {
                for (Key = 0; Key < Data.SearchKey.length; Key++) {
                    if (Data.JsonList[i][Data.SearchKey[Key]] && Data.JsonList[i][Data.SearchKey[Key]].indexOf(KeyWord[j]) < 0) {
                        Exist = false
                    } else {
                        break
                    }
                }
            }

            for (Key = 0; Key < Data.SearchKey.length; Key++) {
                if (Data.JsonList[i][Data.SearchKey[Key]] == $('#PopUpWindowSearch_' + Data.ElementId).val()) { Exist = true }
            }

            if (Exist == true) {
                Counter += 1

                if (Data.SearchKey.length > 0 && Counter > Data.ShowMaxResults) break;

                var TextLine = Data.TextLine
                for (Key = 0; Key < Object.keys(Data.JsonList[0]).length; Key++) {
                    TextLine = TextLine.replace("[" + Object.keys(Data.JsonList[0])[Key] + "]", Data.JsonList[i][Object.keys(Data.JsonList[i])[Key]])
                }
                

                $('#PopUpWindowTable_' + Data.ElementId).append('<tr><td id="PopUpWindowBt_' + Data.ElementId + i + '" style="user-select: none;cursor:pointer;font-weight:bold;width:80%;text-align:right"><div style="text-align:center;font-size: 20px;color: #2B3A63;">' + TextLine + '</div></td></tr>');

                (function (i) {
                    $('#PopUpWindowBt_' + Data.ElementId + i).click(function () {
                        $("#" + Data.ElementId).val(Data.JsonList[i][Data.KeyPast])
                        $("#PopUpWindow_" + Data.ElementId).hide()
                        $("#" + Data.ElementId + '_BtOpenList').hide()


                        $("#" + Data.ElementId).unbind().bind('focus', function () { })
                        $("#" + Data.ElementId).focus(function () {
                            $("#PopUpWindow_" + Data.ElementId).show()
                            $("#" + Data.ElementId).blur()
                            $('#PopUpWindowSearch_' + Data.ElementId).val('')
                            PopUpWindowSearch()
                            if (Data.Focus == true) {
                                $('#PopUpWindowSearch_' + Data.ElementId).focus()
                            }
                        });

                        if (Data.Function_After_Selection) {
                            Data.Function_After_Selection(Data.JsonList[i])
                        }
                        setTimeout(function () { ScrollUp($('#' + Data.ElementId)) }, 100);
                    });
                })(i);
            };
        }

        if (Data.SearchKey.length > 0 == true && Counter > Data.ShowMaxResults) {
            $('#CardFixedCount_' + Data.ElementId + '').html("<div style='color: indianred;'>ישנם מעל " + Data.ShowMaxResults + " תוצאות, מומלץ לצמצם חיפוש.</div>")
        } else {
            $('#CardFixedCount_' + Data.ElementId).html('סה"כ תוצאות: <span>' + Counter + '</span>')
        }


        if (Data.OtherText != "" && Data.OtherTextTopList != true) {
            AddOtherText()
        }
        
    }

    PopUpWindowSearch()

    function AddOtherText() {
        if (Data.OtherText != "") {
            $('#PopUpWindowTable_' + Data.ElementId).append('<tr><td id="PopUpWindowBt_' + Data.ElementId + '_Other" style="user-select: none; cursor: pointer; font-weight: bold; width: 80%; text-align: right; background: #607D8B; color: white !important;"><div style="text-align:center;font-size: 20px;">' + Data.OtherText + '</div></td></tr>');
            $('#PopUpWindowBt_' + Data.ElementId + '_Other').on('click', function () {

                $("#" + Data.ElementId).unbind().bind('focus', function () { })
                $("#PopUpWindow_" + Data.ElementId).hide()
                $("#" + Data.ElementId).val('').focus()
                $("#" + Data.ElementId + '_BtOpenList').show()


                if (Data.Function_After_Selection) {
                    Data.Function_After_Selection(Data.OtherText)
                }
            })
        }
    }


    $('#PopUpWindowSearch_' + Data.ElementId).on('input', function () {
        PopUpWindowSearch()
    })

    if (Data.SearchKey.length > 0) {
        $('#PopUpWindowSearch_' + Data.ElementId).show()
        $('#CardFixedCount_' + Data.ElementId).show()
    }
}












var ShowMaxResults = 100;
function CreatingPopUpWindow(Data) {
    //CreatingPopUpWindow({
    //    ElementId: 'City',
    //    Title: 'עיר',
    //    Array: ['נתיבות', 'ירושלים', 'בני ברק', 'ירושלים', 'נתיבות'],
    //    Search: true,
    //    Sort: false,
    //    DeleteDuplicates: true,
    //    Focus: true,
    //    IsOther: true,
    //    ShowMaxResults: 120,
    // Function_After_Selection : function () {}
    //})

    if (Data.ShowMaxResults) {
        ShowMaxResults = Data.ShowMaxResults
    }

    var html = ''
    html += '<div id="PopUpWindow_' + Data.ElementId + '" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.5);display:none;">'
    html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 500px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
    html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" onclick="$(this).parent().parent().hide()" >X</span>'
    html += '<div style="text-align:center">'
    html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 18px; -webkit-user-select: none; text-align: center; padding: 0;">' + (Data.Koteret_Txt ? Data.Koteret_Txt : 'בחר ') + Data.Title + ':</div>'
    html += '<input id="PopUpWindowSearch_' + Data.ElementId + '" style="-webkit-appearance: none; font-size: large; color: #3f475e; text-align: center; padding: 6px; border-color: #f7bb4d; border-style: solid; border-width: 0px 0px 2px 0px; margin: 5px 5px; background-color: #FFFFFB; -webkit-box-sizing: border-box;margin-top: -7px;display:none;" type="text" placeholder="חפש ' + Data.Title + '" />'
    html += '<div id="CardFixedCount_' + Data.ElementId + '" style="padding: 5px 0 13px;display:none">סה"כ תוצאות: <span></span></div>'
    html += '<table id="PopUpWindowTable_' + Data.ElementId + '" style="text-align:center;width:95%;font-size:medium;background-color:white"></table>'
    html += '</div></div></div>'

    $('body').append(html)

    $("#" + Data.ElementId).focus(function () {
        $("#PopUpWindow_" + Data.ElementId).show()
        $("#" + Data.ElementId).blur()
        $('#PopUpWindowSearch_' + Data.ElementId).val('')
        PopUpWindowSearch()
        if (Data.Focus == true) {
            $('#PopUpWindowSearch_' + Data.ElementId).focus()
        }
    });


    if (Data.IsOther == true) {
        $("#" + Data.ElementId + 'Div').append('<div style="display:none;" id="' + Data.ElementId + '_BtOpenList"><span style="display: inline-block;padding: 2px 10px;background-color: aliceblue;border-radius: 5px;font-family: Assistant;margin-right: 5px;color: rgb(86,130,171);border: 1px solid darkgrey;font-size: 15px;cursor: pointer;user-select: none;">הצג רשימה</span></div>');

        $("#" + Data.ElementId + '_BtOpenList span').click(function () {
            $("#PopUpWindow_" + Data.ElementId).show()
            $('#PopUpWindowSearch_' + Data.ElementId).val('')
            PopUpWindowSearch()
            if (Data.Focus == true) {
                $('#PopUpWindowSearch_' + Data.ElementId).focus()
            }
        });
    }


    if (Data.DeleteDuplicates == true) {
        var TestDuplicates = []
        for (i = 0; i < Data.Array.length; i++) {
            if (TestDuplicates.indexOf(Data.Array[i]) == -1) {
                TestDuplicates.push(Data.Array[i])
            }
        }
        Data.Array = TestDuplicates
    }


    if (Data.Sort == true) {
        Data.Array.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        })
    }



    function PopUpWindowSearch() {
        $('#PopUpWindowTable_' + Data.ElementId).html('')

        var KeyWord = $('#PopUpWindowSearch_' + Data.ElementId).val().split(' ')
        var Counter = 0
        for (var i = 0; i < Data.Array.length; i++) {
            var Exist = true
            for (var j = 0; j < KeyWord.length; j++) {
                if (Data.Array[i].indexOf(KeyWord[j]) < 0) { Exist = false }
            }
            if (Data.Array[i] == $('#PopUpWindowSearch_' + Data.ElementId).val()) { Exist = true }
            if (Exist == true) {
                Counter += 1

                if (Data.Search == true && Counter > ShowMaxResults) break;


                $('#PopUpWindowTable_' + Data.ElementId).append('<tr><td id="PopUpWindowBt_' + Data.ElementId + i + '" style="user-select: none;cursor:pointer;font-weight:bold;width:80%;text-align:right"><div style="text-align:center;font-size: 20px;color: #2B3A63;">' + Data.Array[i] + '</div></td></tr>');
                (function (i) {
                    $('#PopUpWindowBt_' + Data.ElementId + i).click(function () {
                        $("#" + Data.ElementId).val(Data.Array[i])
                        $("#PopUpWindow_" + Data.ElementId).hide()

                        if (Data.Function_After_Selection) {
                            Data.Function_After_Selection()
                        }
                        setTimeout(function () { ScrollUp($('#' + Data.ElementId)) }, 100);
                    });
                })(i);
            };
        }

        if (Data.Search == true && Counter > ShowMaxResults) {
            $('#CardFixedCount_' + Data.ElementId + '').html("<div style='color: indianred;'>ישנם מעל " + ShowMaxResults+" תוצאות, מומלץ לצמצם חיפוש.</div>")
        } else {
            $('#CardFixedCount_' + Data.ElementId).html('סה"כ תוצאות: <span>' + Counter + '</span>')
        }



        if (Data.IsOther == true) {
            $('#PopUpWindowTable_' + Data.ElementId).append('<tr><td id="PopUpWindowBt_' + Data.ElementId + '_Other" style="user-select: none; cursor: pointer; font-weight: bold; width: 80%; text-align: right; background: #607D8B; color: white !important;"><div style="text-align:center;font-size: 20px;">אחר</div></td></tr>');
        }

        $('#PopUpWindowBt_' + Data.ElementId + '_Other').on('click', function () {
            $("#" + Data.ElementId).unbind().bind('focus', function () { })
            $("#PopUpWindow_" + Data.ElementId).hide()
            $("#" + Data.ElementId).val('').focus()
            $("#" + Data.ElementId + '_BtOpenList').show()
        })
    }

    PopUpWindowSearch()


    $('#PopUpWindowSearch_' + Data.ElementId).on('input', function () {
        PopUpWindowSearch()
    })

    if (Data.Search == true) {
        $('#PopUpWindowSearch_' + Data.ElementId).show()
        $('#CardFixedCount_' + Data.ElementId).show()
    }
}




//CheckAllowedZeout ***********  959
//function ZeoutCheck() {

//    $("#ZeoutCheckSave").hide()
//    $("#ZeoutCheckWait").show()
//    ZeoutNumber = $("#ZeoutCheckText").val();
//    if ($.isNumeric(ZeoutNumber) == false) { LoginSwal("נא להקיש מספר זהות בספרות בלבד, ללא סימנים", "ZeoutCheckText"); return false };

//    $.ajax({
//        url: "/nedarimplus/Forms/Manage.aspx?Action=CheckAllowedZeout&MosadId=" + Json.MosadId + "&Zeout=" + encodeURIComponent(ZeoutNumber),
//        context: Text,
//        timeout: 16000,
//    }).success(function (JsonData) {
//        if (JsonData.Status == 'Error' || JsonData.Result == 'Error') {
//            swal({
//                type: "warning",
//                title: "מספר הזהות שהוקש לא נמצא במערכת <br/> הנך מועבר לטופס הרשמה למערכת",
//                timer: 3000,
//                showConfirmButton: false,
//                html: true
//            }, function (r) {
//                Open(968)
//            })
//        }
//        else {
//            $('#AllMainForm').show();
//            $('#ZeoutCheck').hide();
//            $("#Zeout").val(ZeoutNumber);
//            $("#Zeout").attr('disabled', 'disabled');
//            return false;
//        }
//    }).error(function () {
//        EAlertConfirm("שגיאה בקבלת נתונים. בדוק תקשורת")
//    });


//}



//Snif PopUp + HTML. 909  **************





//Generic
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0].toLowerCase() == sParam.toLowerCase()) {
            return sParameterName[1];
        }
    }
    return ''
}

function IsVisible(Element) {
    if (Element == undefined) return false
    var element = document.getElementById(Element);
    while (element.parentNode) {
        if ($("#" + element.id).css('display') == 'none') return false
        element = element.parentNode;
    }
    return true
}

function decode(str) {
    return decodeURIComponent(str.replace(/\+/g, " "));
}

function htmlEncode(value) {
    return $('<textarea/>').text(value).html();
}

function EnableForm(Enable) {
    $.ajax({
        url: "/nedarimplus/Forms/Manage.aspx?Action=EnableForm&MosadId=" + Json.MosadId + "&TofesId=" + Json.TofesId + "&Enable=" + encodeURIComponent(Enable),
        context: Text,
        timeout: 16000,
    }).success(function (JsonData) {
        if (JsonData.Status == 'Error' || JsonData.Result == 'Error') {
            EAlertConfirm("שגיאה", JsonData.Message)
        }
        else {
            IAlertConfirm("הפעולה בוצעה בהצלחה");
        }
    }).error(function () {
        EAlertConfirm("שגיאה בקבלת נתונים. בדוק תקשורת")
    });
}

function GetExcel() {
    //console.log(true)
    var url = "/nedarimplus/Forms/Manage.aspx?Action=GetExcel&MosadId=" + Json.MosadId + "&TofesId=" + Json.TofesId
    //var FormData = '<form action="' + url + '" method="post" target="_blank" style="display:none">'
    var FormData = '<form action="' + url + '" method="post" style="display:none">'
    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element]
        if (JsonElement.Type == "Margin" || JsonElement.Type == "List" || JsonElement.Type == "Koteret" || JsonElement.DbName == undefined) { continue; }
        FormData += '<input type="text" name="' + JsonElement.DbName + '" value="' + JsonElement.fieldName.replace(/"/g, '&quot;').replace(/<b>/g, '').replace(/<\/b>/g, '') + '" />'
    }
    FormData += '</form>'
    var form = $(FormData);

    $('body').append(form);
    form.submit();
}

function Resat_Form_770_1530_2560(MosadId, Num) {
    if (Num !== 770 && Num !== 1530 && Num !== 2560) {
        return false;
    }
    swal({
        title: "<span style='font-size: 22px; color: #607d8b;'>טופס " + Num + "</span><br />איפוס המידע השמור בשרתים",
        text: "על מנת לבצע איפוס, נא ללחוץ אישור\".",
        html: true,
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "אישור",
        cancelButtonText: "ביטול",
        //inputPlaceholder: "הקלד כאן את המילים: אני מאשר",
        showLoaderOnConfirm: true,
    }, function (inputValue) {
        if (inputValue === false) return false;
        $.ajax({
            url: "/nedarimplus/Forms/Manage.aspx?Action=ResetForm&MosadId=" + MosadId + "&TofesId=" + Num,
            context: Text,
            timeout: 16000,
        }).success(function (JsonData) {
            if (JsonData.Status == 'Error' || JsonData.Result == 'Error') {
                EAlertConfirm("שגיאה", JsonData.Message)
            }
            else {
                IAlertConfirm("הפעולה בוצעה בהצלחה");
            }
        }).error(function () {
            EAlertConfirm("שגיאה בקבלת נתונים. בדוק תקשורת")
        });
    });

}
function ResetForm() {
    swal({
        title: "<span style='font-size: 22px; color: #607d8b;'>טופס " + Json.TofesId + "</span><br />איפוס המידע השמור בשרתים",
        text: "על מנת לבצע איפוס, נא להקליד \"אני מאשר\".",
        html: true,
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "אישור",
        cancelButtonText: "ביטול",
        inputPlaceholder: "הקלד כאן את המילים: אני מאשר",
        showLoaderOnConfirm: true,
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("נא להקליד: אני מאשר");
            return false
        }
        if (inputValue !== "אני מאשר" && inputValue !== "tbh ntar") {
            swal.showInputError("נא להקליד: אני מאשר");
            return false
        }
        $.ajax({
            url: "/nedarimplus/Forms/Manage.aspx?Action=ResetForm&MosadId=" + Json.MosadId + "&TofesId=" + Json.TofesId,
            context: Text,
            timeout: 16000,
        }).success(function (JsonData) {
            if (JsonData.Status == 'Error' || JsonData.Result == 'Error') {
                EAlertConfirm("שגיאה", JsonData.Message)
            }
            else {
                IAlertConfirm("הפעולה בוצעה בהצלחה");
            }
        }).error(function () {
            EAlertConfirm("שגיאה בקבלת נתונים. בדוק תקשורת")
        });
    });

}

function EAlertConfirm(message, insidetext) {
    swal({
        type: "error",
        title: message, text: insidetext,
        timer: 10000,
        showConfirmButton: true,
        allowOutsideClick: false,
    });
}

function IAlertConfirm(message, insidetext) {
    swal({
        type: "info",
        title: message, text: insidetext,
        timer: 30000,
        html: true,
        showConfirmButton: true,
        allowOutsideClick: false,
    });
}

// רשימת DbName ריקים בדף
var GetCheckDbNameIsTrue = false
function GetCheckDbName() {
    if (GetCheckDbNameIsTrue == false) {
        GetCheckDbNameIsTrue = true;

        var html = ""
        html += '<div id="Card_GetCheckDbName" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.5);">'
        html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 500px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
        html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" onclick="$(this).parent().parent().hide()" >X</span>'
        html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 18px; -webkit-user-select: none; text-align: center; padding: 0;">רשימת שדות פנויים</div>'
        html += '<div id="GetCheckDbName_html" style="user-select: text;direction: ltr;"></div>'
        html += '</div>'

        $("body").append(html)
    }

    var ar = []
    var AllOb = []
    var MaxObj = []
    var tot = []
    var totMax = []

    for (i = 0; i < CheckDbName.length; i++) {
        if (CheckDbName[i].indexOf("Max") > -1) {
            MaxObj.push(CheckDbName[i])
        } else {
            AllOb.push(CheckDbName[i])
        }
    }

    for (i = 0; i <= 100; i++) {
        ar.push("")
    }

    for (i = 0; i < AllOb.length; i++) {
        ar[AllOb[i].substr(5)] = AllOb[i]
    }

    for (i = 0; i < ar.length; i++) {
        if (ar[i] == "" && i != 0) {
            tot.push("Field" + i)
        }
    }

    for (i = 0; i <= 10; i++) {
        totMax.push("")
    }

    for (i = 0; i < MaxObj.length; i++) {
        totMax[MaxObj[i].substring(5, 6)] = MaxObj[i]
    }

    for (i = 0; i < totMax.length; i++) {
        if (totMax[i] == "" && i != 0) {
            tot.push("Field" + i + "Max")
        }
    }


    var html = "<div style='display: flex; flex-wrap: wrap; justify-content: space-around;'>"
    for (i = 0; i < tot.length; i++) {
        html += "<div style='width: 100%;'>" + tot[i] + "</div>"
    }
    html += "</div>"

    $("#GetCheckDbName_html").html(html);
    $("#Card_GetCheckDbName").show();
}











// יבוא כל רשימת הערים והרחובות לדף
//listCityGetAllCity({
//    CityId: '#City',
//    StreetId: '#Street',
//    Auto_Focus_After_City_Selection: true,
//    list_Citys: ["נתיבות", "אופקים"],
//    CityDefault: "אופקים"
//})



function listCityOpenCloseCardFixed(Type, Card) {
    if (Type == "Close") {
        $("#CardFixed_" + Card + '_listCity').hide();
        $("#CardFixed_" + Card + '_listCity_Search').val('');
    }
    else {
        $("#CardFixed_" + Card + '_listCity').show().scrollTop(0)
        $("#CardFixed_" + Card + '_listCity_Search').focus();
    }
}

var DidNotSucceed = []
function listCityGetAllCity(data) {
    data.NameVariable = data.CityId.replace("#", "") + "_CityList"

    window[data.NameVariable] = []

    var city = data.CityId
    var Adders = data.StreetId
    var Action = data.Auto_Focus_After_City_Selection
    var listCitys = data.list_Citys
    var CityDefault = data.CityDefault
    var RemoveCity_ByCityId = [473, 967, 472, 743, 935, 958, 1042, 932, 968, 1342, 966, 961, 1375, 652, 2710, 2024, 1358, 965, 478, 1359, 1339, 1316, 960, 963, 959, 6000, 482, 4001, 998, 1348] // מחיקת רשימת ערים לפי מזהה עיר


    if (window.ListCityGlobal == undefined) {
        window.ListCityGlobal = []

        //$.ajax({
        //    url: "/nedarimplus/Forms/Manage.aspx?Action=GetCitys",
        //    context: Text,
        //    timeout: 16000,
        //}).success(function (res) {
        //    if (res.Status == 'Error') {
        //        swal({
        //            title: res.Message,
        //            type: "error",
        //            showCancelButton: false,
        //            confirmButtonText: 'אישור',
        //            closeOnConfirm: true,
        //            allowOutsideClick: false,
        //        })
        //        return false
        //    }


        var ListCitysLocal = [{ "CityId": "967", "CityName": "אבו ג'ווייעד (שבט)" }, { "CityId": "472", "CityName": "אבו גוש" }, { "CityId": "473", "CityName": "אבו סנאן" }, { "CityId": "935", "CityName": "אבו סריחאן (שבט)" }, { "CityId": "958", "CityName": "אבו עבדון (שבט)" }, { "CityId": "1042", "CityName": "אבו עמאר (שבט)" }, { "CityId": "932", "CityName": "אבו עמרה (שבט)" }, { "CityId": "968", "CityName": "אבו קורינאת (שבט)" }, { "CityId": "1342", "CityName": "אבו קרינאת (יישוב)" }, { "CityId": "966", "CityName": "אבו רובייעה (שבט)" }, { "CityId": "961", "CityName": "אבו רוקייק (שבט)" }, { "CityId": "1375", "CityName": "אבו תלול" }, { "CityId": "652", "CityName": "אבטין" }, { "CityId": "1275", "CityName": "אבטליון" }, { "CityId": "679", "CityName": "אביאל" }, { "CityId": "1115", "CityName": "אביבים" }, { "CityId": "819", "CityName": "אביגדור" }, { "CityId": "3869", "CityName": "אביגיל" }, { "CityId": "175", "CityName": "אביחיל" }, { "CityId": "2052", "CityName": "אביטל" }, { "CityId": "1070", "CityName": "אביעזר" }, { "CityId": "1220", "CityName": "אבירים" }, { "CityId": "182", "CityName": "אבן יהודה" }, { "CityId": "1081", "CityName": "אבן מנחם" }, { "CityId": "783", "CityName": "אבן ספיר" }, { "CityId": "400", "CityName": "אבן שמואל" }, { "CityId": "4011", "CityName": "אבני איתן" }, { "CityId": "3793", "CityName": "אבני חפץ" }, { "CityId": "3786", "CityName": "אבנת" }, { "CityId": "1311", "CityName": "אבשלום" }, { "CityId": "3759", "CityName": "אדורה" }, { "CityId": "113", "CityName": "אדירים" }, { "CityId": "1068", "CityName": "אדמית" }, { "CityId": "1123", "CityName": "אדרת" }, { "CityId": "446", "CityName": "אודים" }, { "CityId": "4010", "CityName": "אודם" }, { "CityId": "1046", "CityName": "אוהד" }, { "CityId": "2710", "CityName": "אום אל-פחם" }, { "CityId": "2024", "CityName": "אום אל-קוטוף" }, { "CityId": "1358", "CityName": "אום בטין" }, { "CityId": "1108", "CityName": "אומן" }, { "CityId": "680", "CityName": "אומץ" }, { "CityId": "31", "CityName": "אופקים" }, { "CityId": "1294", "CityName": "אור הגנוז" }, { "CityId": "67", "CityName": "אור הנר" }, { "CityId": "2400", "CityName": "אור יהודה" }, { "CityId": "1020", "CityName": "אור עקיבא" }, { "CityId": "780", "CityName": "אורה" }, { "CityId": "2012", "CityName": "אורות" }, { "CityId": "4013", "CityName": "אורטל" }, { "CityId": "403", "CityName": "אורים" }, { "CityId": "882", "CityName": "אורנים" }, { "CityId": "3760", "CityName": "אורנית" }, { "CityId": "278", "CityName": "אושה" }, { "CityId": "565", "CityName": "אזור" }, { "CityId": "1157", "CityName": "אחווה" }, { "CityId": "821", "CityName": "אחוזם" }, { "CityId": "1330", "CityName": "אחוזת ברק" }, { "CityId": "785", "CityName": "אחיהוד" }, { "CityId": "850", "CityName": "אחיטוב" }, { "CityId": "804", "CityName": "אחיסמך" }, { "CityId": "797", "CityName": "אחיעזר" }, { "CityId": "965", "CityName": "אטרש (שבט)" }, { "CityId": "338", "CityName": "איבים" }, { "CityId": "716", "CityName": "אייל" }, { "CityId": "77", "CityName": "איילת השחר" }, { "CityId": "294", "CityName": "אילון" }, { "CityId": "1126", "CityName": "אילות" }, { "CityId": "49", "CityName": "אילניה" }, { "CityId": "2600", "CityName": "אילת" }, { "CityId": "1336", "CityName": "אירוס" }, { "CityId": "3762", "CityName": "איתמר" }, { "CityId": "37", "CityName": "איתן" }, { "CityId": "886", "CityName": "איתנים" }, { "CityId": "478", "CityName": "אכסאל" }, { "CityId": "1359", "CityName": "אל סייד" }, { "CityId": "1145", "CityName": "אלומה" }, { "CityId": "330", "CityName": "אלומות" }, { "CityId": "1182", "CityName": "אלון הגליל" }, { "CityId": "3579", "CityName": "אלון מורה" }, { "CityId": "3604", "CityName": "אלון שבות" }, { "CityId": "429", "CityName": "אלוני אבא" }, { "CityId": "4017", "CityName": "אלוני הבשן" }, { "CityId": "868", "CityName": "אלוני יצחק" }, { "CityId": "285", "CityName": "אלונים" }, { "CityId": "1365", "CityName": "אליאב" }, { "CityId": "41", "CityName": "אליכין" }, { "CityId": "4002", "CityName": "אלי-עד" }, { "CityId": "1248", "CityName": "אליפז" }, { "CityId": "730", "CityName": "אליפלט" }, { "CityId": "682", "CityName": "אליקים" }, { "CityId": "204", "CityName": "אלישיב" }, { "CityId": "841", "CityName": "אלישמע" }, { "CityId": "1125", "CityName": "אלמגור" }, { "CityId": "3556", "CityName": "אלמוג" }, { "CityId": "1309", "CityName": "אלעד" }, { "CityId": "1339", "CityName": "אל-עזי" }, { "CityId": "3618", "CityName": "אלעזר" }, { "CityId": "1316", "CityName": "אל-עריאן" }, { "CityId": "3750", "CityName": "אלפי מנשה" }, { "CityId": "603", "CityName": "אלקוש" }, { "CityId": "3560", "CityName": "אלקנה" }, { "CityId": "4003", "CityName": "אל-רום" }, { "CityId": "772", "CityName": "אמונים" }, { "CityId": "1064", "CityName": "אמירים" }, { "CityId": "1253", "CityName": "אמנון" }, { "CityId": "23", "CityName": "אמציה" }, { "CityId": "4012", "CityName": "אניעם" }, { "CityId": "960", "CityName": "אסד (שבט)" }, { "CityId": "3754", "CityName": "אספר" }, { "CityId": "529", "CityName": "אעבלין" }, { "CityId": "963", "CityName": "אעצם (שבט)" }, { "CityId": "959", "CityName": "אפיניש (שבט)" }, { "CityId": "4301", "CityName": "אפיק" }, { "CityId": "176", "CityName": "אפיקים" }, { "CityId": "313", "CityName": "אפק" }, { "CityId": "3650", "CityName": "אפרת" }, { "CityId": "701", "CityName": "ארבל" }, { "CityId": "3598", "CityName": "ארגמן" }, { "CityId": "714", "CityName": "ארז" }, { "CityId": "3570", "CityName": "אריאל" }, { "CityId": "1324", "CityName": "ארסוף" }, { "CityId": "71", "CityName": "אשבול" }, { "CityId": "1276", "CityName": "אשבל" }, { "CityId": "70", "CityName": "אשדוד" }, { "CityId": "199", "CityName": "אשדות יעקב (איחוד)" }, { "CityId": "188", "CityName": "אשדות יעקב (מאוחד)" }, { "CityId": "1188", "CityName": "אשחר" }, { "CityId": "3722", "CityName": "אשכולות" }, { "CityId": "2021", "CityName": "אשל הנשיא" }, { "CityId": "1152", "CityName": "אשלים" }, { "CityId": "7100", "CityName": "אשקלון" }, { "CityId": "1256", "CityName": "אשרת" }, { "CityId": "740", "CityName": "אשתאול" }, { "CityId": "1298", "CityName": "אתגר" }, { "CityId": "6000", "CityName": "באקה אל-גרביה" }, { "CityId": "21", "CityName": "באר אורה" }, { "CityId": "1376", "CityName": "באר גנים" }, { "CityId": "155", "CityName": "באר טוביה" }, { "CityId": "2530", "CityName": "באר יעקב" }, { "CityId": "1278", "CityName": "באר מילכה" }, { "CityId": "9000", "CityName": "באר שבע" }, { "CityId": "450", "CityName": "בארות יצחק" }, { "CityId": "697", "CityName": "בארותיים" }, { "CityId": "399", "CityName": "בארי" }, { "CityId": "559", "CityName": "בוסתן הגליל" }, { "CityId": "482", "CityName": "בועיינה-נוג'ידאת" }, { "CityId": "4001", "CityName": "בוקעאתא" }, { "CityId": "698", "CityName": "בורגתה" }, { "CityId": "2043", "CityName": "בחן" }, { "CityId": "762", "CityName": "בטחה" }, { "CityId": "234", "CityName": "ביצרון" }, { "CityId": "998", "CityName": "ביר אל-מכסור" }, { "CityId": "1348", "CityName": "ביר הדאג'" }, { "CityId": "368", "CityName": "ביריה" }, { "CityId": "317", "CityName": "בית אורן" }, { "CityId": "3574", "CityName": "בית אל" }, { "CityId": "562", "CityName": "בית אלעזרי" }, { "CityId": "95", "CityName": "בית אלפא" }, { "CityId": "3652", "CityName": "בית אריה" }, { "CityId": "1076", "CityName": "בית ברל" }, { "CityId": "619", "CityName": "בית גוברין" }, { "CityId": "571", "CityName": "בית גמליאל" }, { "CityId": "480", "CityName": "בית ג'ן" }, { "CityId": "466", "CityName": "בית דגן" }, { "CityId": "723", "CityName": "בית הגדי" }, { "CityId": "373", "CityName": "בית הלוי" }, { "CityId": "322", "CityName": "בית הלל" }, { "CityId": "572", "CityName": "בית העמק" }, { "CityId": "3645", "CityName": "בית הערבה" }, { "CityId": "242", "CityName": "בית השיטה" }, { "CityId": "353", "CityName": "בית זיד" }, { "CityId": "710", "CityName": "בית זית" }, { "CityId": "143", "CityName": "בית זרע" }, { "CityId": "3864", "CityName": "בית חגלה" }, { "CityId": "3575", "CityName": "בית חורון" }, { "CityId": "877", "CityName": "בית חירות" }, { "CityId": "2033", "CityName": "בית חלקיה" }, { "CityId": "159", "CityName": "בית חנן" }, { "CityId": "800", "CityName": "בית חנניה" }, { "CityId": "1050", "CityName": "בית חשמונאי" }, { "CityId": "288", "CityName": "בית יהושע" }, { "CityId": "265", "CityName": "בית יוסף" }, { "CityId": "200", "CityName": "בית ינאי" }, { "CityId": "326", "CityName": "בית יצחק-שער חפר" }, { "CityId": "430", "CityName": "בית לחם הגלילית" }, { "CityId": "751", "CityName": "בית מאיר" }, { "CityId": "784", "CityName": "בית נחמיה" }, { "CityId": "16", "CityName": "בית ניר" }, { "CityId": "672", "CityName": "בית נקופה" }, { "CityId": "202", "CityName": "בית עובד" }, { "CityId": "301", "CityName": "בית עוזיאל" }, { "CityId": "756", "CityName": "בית עזרא" }, { "CityId": "604", "CityName": "בית עריף" }, { "CityId": "212", "CityName": "בית צבי" }, { "CityId": "598", "CityName": "בית קמה" }, { "CityId": "365", "CityName": "בית קשת" }, { "CityId": "848", "CityName": "בית רבן" }, { "CityId": "1162", "CityName": "בית רימון" }, { "CityId": "9200", "CityName": "בית שאן" }, { "CityId": "2610", "CityName": "בית שמש" }, { "CityId": "248", "CityName": "בית שערים" }, { "CityId": "747", "CityName": "בית שקמה" }, { "CityId": "252", "CityName": "ביתן אהרן" }, { "CityId": "3780", "CityName": "ביתר עילית" }, { "CityId": "94", "CityName": "בלפוריה" }, { "CityId": "760", "CityName": "בן זכאי" }, { "CityId": "712", "CityName": "בן עמי" }, { "CityId": "1084", "CityName": "בן שמן (כפר נוער)" }, { "CityId": "2013", "CityName": "בן שמן (מושב)" }, { "CityId": "6100", "CityName": "בני ברק" }, { "CityId": "1368", "CityName": "בני דקלים" }, { "CityId": "592", "CityName": "בני דרום" }, { "CityId": "386", "CityName": "בני דרור" }, { "CityId": "4015", "CityName": "בני יהודה" }, { "CityId": "1363", "CityName": "בני נצרים" }, { "CityId": "448", "CityName": "בני עטרות" }, { "CityId": "1066", "CityName": "בני עיש" }, { "CityId": "418", "CityName": "בני ציון" }, { "CityId": "588", "CityName": "בני ראם" }, { "CityId": "685", "CityName": "בניה" }, { "CityId": "9800", "CityName": "בנימינה-גבעת עדה" }, { "CityId": "1326", "CityName": "בסמה" }, { "CityId": "944", "CityName": "בסמת טבעון" }, { "CityId": "483", "CityName": "בענה" }, { "CityId": "389", "CityName": "בצרה" }, { "CityId": "589", "CityName": "בצת" }, { "CityId": "864", "CityName": "בקוע" }, { "CityId": "3612", "CityName": "בקעות" }, { "CityId": "823", "CityName": "בר גיורא" }, { "CityId": "1191", "CityName": "בר יוחאי" }, { "CityId": "3744", "CityName": "ברוכין" }, { "CityId": "428", "CityName": "ברור חיל" }, { "CityId": "2060", "CityName": "ברוש" }, { "CityId": "3710", "CityName": "ברכה" }, { "CityId": "746", "CityName": "ברכיה" }, { "CityId": "667", "CityName": "ברעם" }, { "CityId": "141", "CityName": "ברק" }, { "CityId": "617", "CityName": "ברקאי" }, { "CityId": "3654", "CityName": "ברקן" }, { "CityId": "2038", "CityName": "ברקת" }, { "CityId": "1323", "CityName": "בת הדר" }, { "CityId": "1361", "CityName": "בת חן" }, { "CityId": "1319", "CityName": "בת חפר" }, { "CityId": "6200", "CityName": "בת ים" }, { "CityId": "3794", "CityName": "בת עין" }, { "CityId": "33", "CityName": "בת שלמה" }, { "CityId": "872", "CityName": "גאולי תימן" }, { "CityId": "379", "CityName": "גאולים" }, { "CityId": "853", "CityName": "גאליה" }, { "CityId": "352", "CityName": "גבולות" }, { "CityId": "424", "CityName": "גבים" }, { "CityId": "86", "CityName": "גבע" }, { "CityId": "3763", "CityName": "גבע בנימין" }, { "CityId": "683", "CityName": "גבע כרמל" }, { "CityId": "2014", "CityName": "גבעולים" }, { "CityId": "3644", "CityName": "גבעון החדשה" }, { "CityId": "1344", "CityName": "גבעות בר" }, { "CityId": "3862", "CityName": "גבעות הרואה" }, { "CityId": "1362", "CityName": "גבעות עדן" }, { "CityId": "1293", "CityName": "גבעת אבני" }, { "CityId": "1288", "CityName": "גבעת אלה" }, { "CityId": "147", "CityName": "גבעת ברנר" }, { "CityId": "870", "CityName": "גבעת השלושה" }, { "CityId": "3730", "CityName": "גבעת זאב" }, { "CityId": "2018", "CityName": "גבעת חיים (איחוד)" }, { "CityId": "173", "CityName": "גבעת חיים (מאוחד)" }, { "CityId": "207", "CityName": "גבעת חן" }, { "CityId": "4021", "CityName": "גבעת יואב" }, { "CityId": "787", "CityName": "גבעת יערים" }, { "CityId": "919", "CityName": "גבעת ישעיהו" }, { "CityId": "802", "CityName": "גבעת כח" }, { "CityId": "360", "CityName": "גבעת נילי" }, { "CityId": "703", "CityName": "גבעת עוז" }, { "CityId": "681", "CityName": "גבעת שמואל" }, { "CityId": "566", "CityName": "גבעת שמש" }, { "CityId": "1077", "CityName": "גבעת שפירא" }, { "CityId": "793", "CityName": "גבעתי" }, { "CityId": "6300", "CityName": "גבעתיים" }, { "CityId": "342", "CityName": "גברעם" }, { "CityId": "133", "CityName": "גבת" }, { "CityId": "35", "CityName": "גדות" }, { "CityId": "1292", "CityName": "ג'דיידה-מכר" }, { "CityId": "145", "CityName": "גדיש" }, { "CityId": "442", "CityName": "גדעונה" }, { "CityId": "2550", "CityName": "גדרה" }, { "CityId": "485", "CityName": "ג'ולס" }, { "CityId": "852", "CityName": "גונן" }, { "CityId": "755", "CityName": "גורן" }, { "CityId": "1219", "CityName": "גורנות הגליל" }, { "CityId": "457", "CityName": "גזית" }, { "CityId": "370", "CityName": "גזר" }, { "CityId": "706", "CityName": "גיאה" }, { "CityId": "196", "CityName": "גיבתון" }, { "CityId": "1043", "CityName": "גיזו" }, { "CityId": "1204", "CityName": "גילון" }, { "CityId": "736", "CityName": "גילת" }, { "CityId": "262", "CityName": "גינוסר" }, { "CityId": "92", "CityName": "גיניגר" }, { "CityId": "863", "CityName": "גינתון" }, { "CityId": "1206", "CityName": "גיתה" }, { "CityId": "3613", "CityName": "גיתית" }, { "CityId": "393", "CityName": "גלאון" }, { "CityId": "627", "CityName": "ג'לג'וליה" }, { "CityId": "3606", "CityName": "גלגל" }, { "CityId": "346", "CityName": "גליל ים" }, { "CityId": "369", "CityName": "גלעד (אבן יצחק)" }, { "CityId": "745", "CityName": "גמזו" }, { "CityId": "1072", "CityName": "גן הדרום" }, { "CityId": "225", "CityName": "גן השומרון" }, { "CityId": "239", "CityName": "גן חיים" }, { "CityId": "734", "CityName": "גן יאשיה" }, { "CityId": "166", "CityName": "גן יבנה" }, { "CityId": "1274", "CityName": "גן נר" }, { "CityId": "311", "CityName": "גן שורק" }, { "CityId": "144", "CityName": "גן שלמה" }, { "CityId": "72", "CityName": "גן שמואל" }, { "CityId": "976", "CityName": "ג'נאביב (שבט)" }, { "CityId": "836", "CityName": "גנות" }, { "CityId": "549", "CityName": "גנות הדר" }, { "CityId": "1103", "CityName": "גני הדר" }, { "CityId": "1371", "CityName": "גני טל" }, { "CityId": "862", "CityName": "גני יוחנן" }, { "CityId": "3823", "CityName": "גני מודיעין" }, { "CityId": "218", "CityName": "גני עם" }, { "CityId": "229", "CityName": "גני תקווה" }, { "CityId": "541", "CityName": "ג'סר א-זרקא" }, { "CityId": "842", "CityName": "געש" }, { "CityId": "463", "CityName": "געתון" }, { "CityId": "39", "CityName": "גפן" }, { "CityId": "1129", "CityName": "גרופית" }, { "CityId": "487", "CityName": "ג'ש (גוש חלב)" }, { "CityId": "4022", "CityName": "גשור" }, { "CityId": "305", "CityName": "גשר" }, { "CityId": "574", "CityName": "גשר הזיו" }, { "CityId": "628", "CityName": "ג'ת" }, { "CityId": "340", "CityName": "גת (קיבוץ)" }, { "CityId": "128", "CityName": "גת רימון" }, { "CityId": "494", "CityName": "דאלית אל-כרמל" }, { "CityId": "146", "CityName": "דבורה" }, { "CityId": "489", "CityName": "דבוריה" }, { "CityId": "849", "CityName": "דביר" }, { "CityId": "407", "CityName": "דברת" }, { "CityId": "62", "CityName": "דגניה א'" }, { "CityId": "79", "CityName": "דגניה ב'" }, { "CityId": "1067", "CityName": "דובב" }, { "CityId": "3747", "CityName": "דולב" }, { "CityId": "738", "CityName": "דור" }, { "CityId": "336", "CityName": "דורות" }, { "CityId": "475", "CityName": "דחי" }, { "CityId": "490", "CityName": "דייר אל-אסד" }, { "CityId": "492", "CityName": "דייר חנא" }, { "CityId": "493", "CityName": "דייר ראפאת" }, { "CityId": "2200", "CityName": "דימונה" }, { "CityId": "2063", "CityName": "דישון" }, { "CityId": "300", "CityName": "דליה" }, { "CityId": "431", "CityName": "דלתון" }, { "CityId": "1317", "CityName": "דמיידה" }, { "CityId": "303", "CityName": "דן" }, { "CityId": "302", "CityName": "דפנה" }, { "CityId": "1241", "CityName": "דקל" }, { "CityId": "1349", "CityName": "דריג'את" }, { "CityId": "702", "CityName": "האון" }, { "CityId": "675", "CityName": "הבונים" }, { "CityId": "356", "CityName": "הגושרים" }, { "CityId": "191", "CityName": "הדר עם" }, { "CityId": "9700", "CityName": "הוד השרון" }, { "CityId": "726", "CityName": "הודיה" }, { "CityId": "1322", "CityName": "הודיות" }, { "CityId": "1169", "CityName": "הוואשלה (שבט)" }, { "CityId": "956", "CityName": "הוזייל (שבט)" }, { "CityId": "1186", "CityName": "הושעיה" }, { "CityId": "250", "CityName": "הזורע" }, { "CityId": "307", "CityName": "הזורעים" }, { "CityId": "434", "CityName": "החותרים" }, { "CityId": "684", "CityName": "היוגב" }, { "CityId": "1208", "CityName": "הילה" }, { "CityId": "377", "CityName": "המעפיל" }, { "CityId": "677", "CityName": "הסוללים" }, { "CityId": "423", "CityName": "העוגן" }, { "CityId": "3769", "CityName": "הר אדר" }, { "CityId": "3603", "CityName": "הר גילה" }, { "CityId": "1261", "CityName": "הר עמשא" }, { "CityId": "464", "CityName": "הראל" }, { "CityId": "1249", "CityName": "הרדוף" }, { "CityId": "6400", "CityName": "הרצליה" }, { "CityId": "1203", "CityName": "הררית" }, { "CityId": "3639", "CityName": "ורד יריחו" }, { "CityId": "1133", "CityName": "ורדון" }, { "CityId": "2742", "CityName": "זבארגה (שבט)" }, { "CityId": "815", "CityName": "זבדיאל" }, { "CityId": "44", "CityName": "זוהר" }, { "CityId": "584", "CityName": "זיקים" }, { "CityId": "788", "CityName": "זיתן" }, { "CityId": "9300", "CityName": "זכרון יעקב" }, { "CityId": "799", "CityName": "זכריה" }, { "CityId": "1290", "CityName": "זמר" }, { "CityId": "1065", "CityName": "זמרת" }, { "CityId": "816", "CityName": "זנוח" }, { "CityId": "2064", "CityName": "זרועה" }, { "CityId": "975", "CityName": "זרזיר" }, { "CityId": "818", "CityName": "זרחיה" }, { "CityId": "235", "CityName": "חבצלת השרון" }, { "CityId": "1110", "CityName": "חבר" }, { "CityId": "3400", "CityName": "חברון" }, { "CityId": "717", "CityName": "חגור" }, { "CityId": "3764", "CityName": "חגי" }, { "CityId": "205", "CityName": "חגלה" }, { "CityId": "618", "CityName": "חדיד" }, { "CityId": "4026", "CityName": "חד-נס" }, { "CityId": "6500", "CityName": "חדרה" }, { "CityId": "1321", "CityName": "ח'ואלד" }, { "CityId": "986", "CityName": "ח'ואלד (שבט)" }, { "CityId": "948", "CityName": "חוג'ייראת (ד'הרה)" }, { "CityId": "160", "CityName": "חולדה" }, { "CityId": "6600", "CityName": "חולון" }, { "CityId": "1239", "CityName": "חולית" }, { "CityId": "253", "CityName": "חולתה" }, { "CityId": "662", "CityName": "חוסן" }, { "CityId": "1332", "CityName": "חוסנייה" }, { "CityId": "115", "CityName": "חופית" }, { "CityId": "374", "CityName": "חוקוק" }, { "CityId": "1303", "CityName": "חורה" }, { "CityId": "496", "CityName": "חורפיש" }, { "CityId": "355", "CityName": "חורשים" }, { "CityId": "1047", "CityName": "חזון" }, { "CityId": "219", "CityName": "חיבת ציון" }, { "CityId": "3643", "CityName": "חיננית" }, { "CityId": "4000", "CityName": "חיפה" }, { "CityId": "162", "CityName": "חירות" }, { "CityId": "1272", "CityName": "חלוץ" }, { "CityId": "820", "CityName": "חלץ" }, { "CityId": "993", "CityName": "חמאם" }, { "CityId": "801", "CityName": "חמד" }, { "CityId": "343", "CityName": "חמדיה" }, { "CityId": "3646", "CityName": "חמדת" }, { "CityId": "3609", "CityName": "חמרה" }, { "CityId": "807", "CityName": "חניאל" }, { "CityId": "280", "CityName": "חניתה" }, { "CityId": "1257", "CityName": "חנתון" }, { "CityId": "4005", "CityName": "חספין" }, { "CityId": "363", "CityName": "חפץ חיים" }, { "CityId": "90", "CityName": "חפצי-בה" }, { "CityId": "700", "CityName": "חצב" }, { "CityId": "13", "CityName": "חצבה" }, { "CityId": "2034", "CityName": "חצור הגלילית" }, { "CityId": "406", "CityName": "חצור-אשדוד" }, { "CityId": "397", "CityName": "חצרים" }, { "CityId": "422", "CityName": "חרב לאת" }, { "CityId": "1024", "CityName": "חרוצים" }, { "CityId": "1247", "CityName": "חריש" }, { "CityId": "3717", "CityName": "חרמש" }, { "CityId": "1209", "CityName": "חרשים" }, { "CityId": "3770", "CityName": "חשמונאים" }, { "CityId": "6700", "CityName": "טבריה" }, { "CityId": "962", "CityName": "טובא-זנגריה" }, { "CityId": "498", "CityName": "טורעאן" }, { "CityId": "2730", "CityName": "טייבה" }, { "CityId": "497", "CityName": "טייבה (בעמק)" }, { "CityId": "2720", "CityName": "טירה" }, { "CityId": "663", "CityName": "טירת יהודה" }, { "CityId": "2100", "CityName": "טירת כרמל" }, { "CityId": "268", "CityName": "טירת צבי" }, { "CityId": "462", "CityName": "טל שחר" }, { "CityId": "1181", "CityName": "טל-אל" }, { "CityId": "1177", "CityName": "טללים" }, { "CityId": "3788", "CityName": "טלמון" }, { "CityId": "8900", "CityName": "טמרה" }, { "CityId": "547", "CityName": "טמרה (יזרעאל)" }, { "CityId": "3743", "CityName": "טנא" }, { "CityId": "1214", "CityName": "טפחות" }, { "CityId": "1295", "CityName": "יאנוח-ג'ת" }, { "CityId": "1232", "CityName": "יבול" }, { "CityId": "46", "CityName": "יבנאל" }, { "CityId": "2660", "CityName": "יבנה" }, { "CityId": "96", "CityName": "יגור" }, { "CityId": "798", "CityName": "יגל" }, { "CityId": "577", "CityName": "יד בנימין" }, { "CityId": "1134", "CityName": "יד השמונה" }, { "CityId": "758", "CityName": "יד חנה" }, { "CityId": "358", "CityName": "יד מרדכי" }, { "CityId": "775", "CityName": "יד נתן" }, { "CityId": "64", "CityName": "יד רמבם" }, { "CityId": "1144", "CityName": "ידידה" }, { "CityId": "9400", "CityName": "יהוד-מונוסון" }, { "CityId": "1158", "CityName": "יהל" }, { "CityId": "2009", "CityName": "יובל" }, { "CityId": "1226", "CityName": "יובלים" }, { "CityId": "1112", "CityName": "יודפת" }, { "CityId": "4007", "CityName": "יונתן" }, { "CityId": "803", "CityName": "יושיביה" }, { "CityId": "452", "CityName": "יזרעאל" }, { "CityId": "409", "CityName": "יחיעם" }, { "CityId": "866", "CityName": "יטבתה" }, { "CityId": "3607", "CityName": "ייטב" }, { "CityId": "811", "CityName": "יכיני" }, { "CityId": "753", "CityName": "ינוב" }, { "CityId": "2011", "CityName": "ינון" }, { "CityId": "29", "CityName": "יסוד המעלה" }, { "CityId": "440", "CityName": "יסודות" }, { "CityId": "575", "CityName": "יסעור" }, { "CityId": "1138", "CityName": "יעד" }, { "CityId": "1117", "CityName": "יעל" }, { "CityId": "1044", "CityName": "יעף" }, { "CityId": "795", "CityName": "יערה" }, { "CityId": "499", "CityName": "יפיע" }, { "CityId": "3566", "CityName": "יפית" }, { "CityId": "134", "CityName": "יפעת" }, { "CityId": "453", "CityName": "יפתח" }, { "CityId": "3749", "CityName": "יצהר" }, { "CityId": "759", "CityName": "יציץ" }, { "CityId": "417", "CityName": "יקום" }, { "CityId": "3647", "CityName": "יקיר" }, { "CityId": "241", "CityName": "יקנעם (מושבה)" }, { "CityId": "240", "CityName": "יקנעם עילית" }, { "CityId": "623", "CityName": "יראון" }, { "CityId": "2026", "CityName": "ירדנה" }, { "CityId": "831", "CityName": "ירוחם" }, { "CityId": "3000", "CityName": "ירושלים" }, { "CityId": "718", "CityName": "ירחיב" }, { "CityId": "502", "CityName": "ירכא" }, { "CityId": "183", "CityName": "ירקונה" }, { "CityId": "916", "CityName": "ישע" }, { "CityId": "805", "CityName": "ישעי" }, { "CityId": "828", "CityName": "ישרש" }, { "CityId": "1227", "CityName": "יתד" }, { "CityId": "504", "CityName": "כאבול" }, { "CityId": "505", "CityName": "כאוכב אבו אל-היג'א" }, { "CityId": "576", "CityName": "כברי" }, { "CityId": "371", "CityName": "כדורי" }, { "CityId": "1338", "CityName": "כדיתה" }, { "CityId": "3564", "CityName": "כוכב השחר" }, { "CityId": "1224", "CityName": "כוכב יאיר" }, { "CityId": "3779", "CityName": "כוכב יעקב" }, { "CityId": "824", "CityName": "כוכב מיכאל" }, { "CityId": "1252", "CityName": "כורזים" }, { "CityId": "1210", "CityName": "כחל" }, { "CityId": "1367", "CityName": "כחלה" }, { "CityId": "840", "CityName": "כיסופים" }, { "CityId": "1153", "CityName": "כישור" }, { "CityId": "1183", "CityName": "כליל" }, { "CityId": "1229", "CityName": "כלנית" }, { "CityId": "1331", "CityName": "כמאנה" }, { "CityId": "1291", "CityName": "כמהין" }, { "CityId": "1201", "CityName": "כמון" }, { "CityId": "2006", "CityName": "כנות" }, { "CityId": "4028", "CityName": "כנף" }, { "CityId": "63", "CityName": "כנרת (מושבה)" }, { "CityId": "57", "CityName": "כנרת (קבוצה)" }, { "CityId": "1059", "CityName": "כסיפה" }, { "CityId": "859", "CityName": "כסלון" }, { "CityId": "1296", "CityName": "כסרא-סמיע" }, { "CityId": "978", "CityName": "כעביה-טבאש-חג'אג'רה" }, { "CityId": "857", "CityName": "כפר אביב" }, { "CityId": "3638", "CityName": "כפר אדומים" }, { "CityId": "364", "CityName": "כפר אוריה" }, { "CityId": "690", "CityName": "כפר אחים" }, { "CityId": "220", "CityName": "כפר ביאליק" }, { "CityId": "177", "CityName": "כפר בילו" }, { "CityId": "357", "CityName": "כפר בלום" }, { "CityId": "2010", "CityName": "כפר בן נון" }, { "CityId": "633", "CityName": "כפר ברא" }, { "CityId": "132", "CityName": "כפר ברוך" }, { "CityId": "106", "CityName": "כפר גדעון" }, { "CityId": "427", "CityName": "כפר גלים" }, { "CityId": "310", "CityName": "כפר גליקסון" }, { "CityId": "76", "CityName": "כפר גלעדי" }, { "CityId": "707", "CityName": "כפר דניאל" }, { "CityId": "3796", "CityName": "כפר האורנים" }, { "CityId": "192", "CityName": "כפר החורש" }, { "CityId": "254", "CityName": "כפר המכבי" }, { "CityId": "582", "CityName": "כפר הנגיד" }, { "CityId": "890", "CityName": "כפר הנוער הדתי" }, { "CityId": "443", "CityName": "כפר הנשיא" }, { "CityId": "187", "CityName": "כפר הס" }, { "CityId": "217", "CityName": "כפר הראה" }, { "CityId": "888", "CityName": "כפר הריף" }, { "CityId": "190", "CityName": "כפר ויתקין" }, { "CityId": "320", "CityName": "כפר ורבורג" }, { "CityId": "1263", "CityName": "כפר ורדים" }, { "CityId": "1325", "CityName": "כפר זוהרים" }, { "CityId": "786", "CityName": "כפר זיתים" }, { "CityId": "696", "CityName": "כפר חבד" }, { "CityId": "609", "CityName": "כפר חושן" }, { "CityId": "255", "CityName": "כפר חיטים" }, { "CityId": "193", "CityName": "כפר חיים" }, { "CityId": "1297", "CityName": "כפר חנניה" }, { "CityId": "112", "CityName": "כפר חסידים א'" }, { "CityId": "889", "CityName": "כפר חסידים ב'" }, { "CityId": "4004", "CityName": "כפר חרוב" }, { "CityId": "673", "CityName": "כפר טרומן" }, { "CityId": "507", "CityName": "כפר יאסיף" }, { "CityId": "233", "CityName": "כפר ידידיה" }, { "CityId": "140", "CityName": "כפר יהושע" }, { "CityId": "168", "CityName": "כפר יונה" }, { "CityId": "85", "CityName": "כפר יחזקאל" }, { "CityId": "170", "CityName": "כפר יעבץ" }, { "CityId": "508", "CityName": "כפר כמא" }, { "CityId": "509", "CityName": "כפר כנא" }, { "CityId": "387", "CityName": "כפר מונש" }, { "CityId": "1095", "CityName": "כפר מימון" }, { "CityId": "98", "CityName": "כפר מלל" }, { "CityId": "510", "CityName": "כפר מנדא" }, { "CityId": "274", "CityName": "כפר מנחם" }, { "CityId": "297", "CityName": "כפר מסריק" }, { "CityId": "512", "CityName": "כפר מצר" }, { "CityId": "764", "CityName": "כפר מרדכי" }, { "CityId": "316", "CityName": "כפר נטר" }, { "CityId": "345", "CityName": "כפר סאלד" }, { "CityId": "6900", "CityName": "כפר סבא" }, { "CityId": "107", "CityName": "כפר סילבר" }, { "CityId": "249", "CityName": "כפר סירקין" }, { "CityId": "875", "CityName": "כפר עבודה" }, { "CityId": "845", "CityName": "כפר עזה" }, { "CityId": "3488", "CityName": "כפר עציון" }, { "CityId": "189", "CityName": "כפר פינס" }, { "CityId": "634", "CityName": "כפר קאסם" }, { "CityId": "388", "CityName": "כפר קיש" }, { "CityId": "654", "CityName": "כפר קרע" }, { "CityId": "579", "CityName": "כפר ראש הנקרה" }, { "CityId": "1130", "CityName": "כפר רוזנואלד (זרעית)" }, { "CityId": "295", "CityName": "כפר רופין" }, { "CityId": "1166", "CityName": "כפר רות" }, { "CityId": "605", "CityName": "כפר שמאי" }, { "CityId": "743", "CityName": "כפר שמואל" }, { "CityId": "267", "CityName": "כפר שמריהו" }, { "CityId": "47", "CityName": "כפר תבור" }, { "CityId": "3572", "CityName": "כפר תפוח" }, { "CityId": "38", "CityName": "כרי דשא" }, { "CityId": "1285", "CityName": "כרכום" }, { "CityId": "1094", "CityName": "כרם ביבנה (ישיבה)" }, { "CityId": "664", "CityName": "כרם בן זמרה" }, { "CityId": "88", "CityName": "כרם בן שמן" }, { "CityId": "580", "CityName": "כרם מהרל" }, { "CityId": "1085", "CityName": "כרם שלום" }, { "CityId": "1264", "CityName": "כרמי יוסף" }, { "CityId": "3766", "CityName": "כרמי צור" }, { "CityId": "1374", "CityName": "כרמי קטיף" }, { "CityId": "1139", "CityName": "כרמיאל" }, { "CityId": "768", "CityName": "כרמיה" }, { "CityId": "1198", "CityName": "כרמים" }, { "CityId": "3656", "CityName": "כרמל" }, { "CityId": "1207", "CityName": "לבון" }, { "CityId": "585", "CityName": "לביא" }, { "CityId": "1230", "CityName": "לבנים" }, { "CityId": "2023", "CityName": "להב" }, { "CityId": "380", "CityName": "להבות הבשן" }, { "CityId": "715", "CityName": "להבות חביבה" }, { "CityId": "1271", "CityName": "להבים" }, { "CityId": "7000", "CityName": "לוד" }, { "CityId": "52", "CityName": "לוזית" }, { "CityId": "595", "CityName": "לוחמי הגיטאות" }, { "CityId": "1171", "CityName": "לוטם" }, { "CityId": "1255", "CityName": "לוטן" }, { "CityId": "674", "CityName": "לימן" }, { "CityId": "24", "CityName": "לכיש" }, { "CityId": "1310", "CityName": "לפיד" }, { "CityId": "1173", "CityName": "לפידות" }, { "CityId": "1060", "CityName": "לקיה" }, { "CityId": "2055", "CityName": "מאור" }, { "CityId": "102", "CityName": "מאיר שפיה" }, { "CityId": "771", "CityName": "מבוא ביתר" }, { "CityId": "3569", "CityName": "מבוא דותן" }, { "CityId": "3709", "CityName": "מבוא חורון" }, { "CityId": "4204", "CityName": "מבוא חמה" }, { "CityId": "1141", "CityName": "מבוא מודיעים" }, { "CityId": "1318", "CityName": "מבואות ים" }, { "CityId": "3825", "CityName": "מבואות יריחו" }, { "CityId": "1080", "CityName": "מבועים" }, { "CityId": "829", "CityName": "מבטחים" }, { "CityId": "573", "CityName": "מבקיעים" }, { "CityId": "1015", "CityName": "מבשרת ציון" }, { "CityId": "481", "CityName": "מגאר" }, { "CityId": "516", "CityName": "מג'ד אל-כרום" }, { "CityId": "689", "CityName": "מגדים" }, { "CityId": "65", "CityName": "מגדל" }, { "CityId": "874", "CityName": "מגדל העמק" }, { "CityId": "3561", "CityName": "מגדל עוז" }, { "CityId": "4201", "CityName": "מג'דל שמס" }, { "CityId": "3751", "CityName": "מגדלים" }, { "CityId": "586", "CityName": "מגידו" }, { "CityId": "375", "CityName": "מגל" }, { "CityId": "695", "CityName": "מגן" }, { "CityId": "1155", "CityName": "מגן שאול" }, { "CityId": "722", "CityName": "מגשימים" }, { "CityId": "2029", "CityName": "מדרך עוז" }, { "CityId": "1140", "CityName": "מדרשת בן גוריון" }, { "CityId": "897", "CityName": "מדרשת רופין" }, { "CityId": "3797", "CityName": "מודיעין עילית" }, { "CityId": "1200", "CityName": "מודיעין-מכבים-רעות" }, { "CityId": "269", "CityName": "מולדת" }, { "CityId": "208", "CityName": "מוצא עילית" }, { "CityId": "635", "CityName": "מוקייבלה" }, { "CityId": "1163", "CityName": "מורן" }, { "CityId": "1178", "CityName": "מורשת" }, { "CityId": "606", "CityName": "מזור" }, { "CityId": "28", "CityName": "מזכרת בתיה" }, { "CityId": "104", "CityName": "מזרע" }, { "CityId": "517", "CityName": "מזרעה" }, { "CityId": "3599", "CityName": "מחולה" }, { "CityId": "1411", "CityName": "מחנה הילה" }, { "CityId": "1418", "CityName": "מחנה טלי" }, { "CityId": "1413", "CityName": "מחנה יהודית" }, { "CityId": "1416", "CityName": "מחנה יוכבד" }, { "CityId": "1415", "CityName": "מחנה יפה" }, { "CityId": "1196", "CityName": "מחנה יתיר" }, { "CityId": "1414", "CityName": "מחנה מרים" }, { "CityId": "1412", "CityName": "מחנה תל נוף" }, { "CityId": "308", "CityName": "מחניים" }, { "CityId": "776", "CityName": "מחסיה" }, { "CityId": "43", "CityName": "מטולה" }, { "CityId": "822", "CityName": "מטע" }, { "CityId": "1128", "CityName": "מי עמי" }, { "CityId": "2054", "CityName": "מיטב" }, { "CityId": "1154", "CityName": "מיטל" }, { "CityId": "649", "CityName": "מייסר" }, { "CityId": "4019", "CityName": "מיצר" }, { "CityId": "1282", "CityName": "מירב" }, { "CityId": "607", "CityName": "מירון" }, { "CityId": "731", "CityName": "מישר" }, { "CityId": "1268", "CityName": "מיתר" }, { "CityId": "3614", "CityName": "מכורה" }, { "CityId": "1343", "CityName": "מכחול" }, { "CityId": "382", "CityName": "מכמורת" }, { "CityId": "1202", "CityName": "מכמנים" }, { "CityId": "164", "CityName": "מלאה" }, { "CityId": "2044", "CityName": "מלילות" }, { "CityId": "596", "CityName": "מלכיה" }, { "CityId": "2030", "CityName": "מנוחה" }, { "CityId": "1174", "CityName": "מנוף" }, { "CityId": "1205", "CityName": "מנות" }, { "CityId": "48", "CityName": "מנחמיה" }, { "CityId": "347", "CityName": "מנרה" }, { "CityId": "994", "CityName": "מנשית זבדה" }, { "CityId": "1258", "CityName": "מסד" }, { "CityId": "263", "CityName": "מסדה" }, { "CityId": "298", "CityName": "מסילות" }, { "CityId": "742", "CityName": "מסילת ציון" }, { "CityId": "748", "CityName": "מסלול" }, { "CityId": "4203", "CityName": "מסעדה" }, { "CityId": "939", "CityName": "מסעודין אל-עזאזמה" }, { "CityId": "197", "CityName": "מעברות" }, { "CityId": "1082", "CityName": "מעגלים" }, { "CityId": "678", "CityName": "מעגן" }, { "CityId": "694", "CityName": "מעגן מיכאל" }, { "CityId": "272", "CityName": "מעוז חיים" }, { "CityId": "3657", "CityName": "מעון" }, { "CityId": "570", "CityName": "מעונה" }, { "CityId": "518", "CityName": "מעיליא" }, { "CityId": "416", "CityName": "מעין ברוך" }, { "CityId": "290", "CityName": "מעין צבי" }, { "CityId": "3616", "CityName": "מעלה אדומים" }, { "CityId": "3608", "CityName": "מעלה אפרים" }, { "CityId": "1127", "CityName": "מעלה גלבוע" }, { "CityId": "4008", "CityName": "מעלה גמלא" }, { "CityId": "286", "CityName": "מעלה החמישה" }, { "CityId": "3752", "CityName": "מעלה לבונה" }, { "CityId": "3651", "CityName": "מעלה מכמש" }, { "CityId": "1327", "CityName": "מעלה עירון" }, { "CityId": "3653", "CityName": "מעלה עמוס" }, { "CityId": "1063", "CityName": "מעלות-תרשיחא" }, { "CityId": "344", "CityName": "מענית" }, { "CityId": "230", "CityName": "מעש" }, { "CityId": "668", "CityName": "מפלסים" }, { "CityId": "3745", "CityName": "מצדות יהודה" }, { "CityId": "325", "CityName": "מצובה" }, { "CityId": "757", "CityName": "מצליח" }, { "CityId": "58", "CityName": "מצפה" }, { "CityId": "1222", "CityName": "מצפה אביב" }, { "CityId": "1370", "CityName": "מצפה אילן" }, { "CityId": "3576", "CityName": "מצפה יריחו" }, { "CityId": "1190", "CityName": "מצפה נטופה" }, { "CityId": "99", "CityName": "מצפה רמון" }, { "CityId": "3610", "CityName": "מצפה שלם" }, { "CityId": "648", "CityName": "מצר" }, { "CityId": "22", "CityName": "מקווה ישראל" }, { "CityId": "843", "CityName": "מרגליות" }, { "CityId": "4101", "CityName": "מרום גולן" }, { "CityId": "1340", "CityName": "מרחב עם" }, { "CityId": "97", "CityName": "מרחביה (מושב)" }, { "CityId": "66", "CityName": "מרחביה (קיבוץ)" }, { "CityId": "1098", "CityName": "מרכז שפירא" }, { "CityId": "421", "CityName": "משאבי שדה" }, { "CityId": "765", "CityName": "משגב דב" }, { "CityId": "378", "CityName": "משגב עם" }, { "CityId": "520", "CityName": "משהד" }, { "CityId": "3605", "CityName": "משואה" }, { "CityId": "620", "CityName": "משואות יצחק" }, { "CityId": "3785", "CityName": "משכיות" }, { "CityId": "670", "CityName": "משמר איילון" }, { "CityId": "563", "CityName": "משמר דוד" }, { "CityId": "732", "CityName": "משמר הירדן" }, { "CityId": "395", "CityName": "משמר הנגב" }, { "CityId": "130", "CityName": "משמר העמק" }, { "CityId": "729", "CityName": "משמר השבעה" }, { "CityId": "194", "CityName": "משמר השרון" }, { "CityId": "3865", "CityName": "משמר יהודה" }, { "CityId": "213", "CityName": "משמרות" }, { "CityId": "425", "CityName": "משמרת" }, { "CityId": "791", "CityName": "משען" }, { "CityId": "1315", "CityName": "מתן" }, { "CityId": "1184", "CityName": "מתת" }, { "CityId": "3648", "CityName": "מתתיהו" }, { "CityId": "4551", "CityName": "נאות גולן" }, { "CityId": "1124", "CityName": "נאות הכיכר" }, { "CityId": "408", "CityName": "נאות מרדכי" }, { "CityId": "1197", "CityName": "נאות סמדר" }, { "CityId": "524", "CityName": "נאעורה" }, { "CityId": "396", "CityName": "נבטים" }, { "CityId": "315", "CityName": "נגבה" }, { "CityId": "3724", "CityName": "נגוהות" }, { "CityId": "309", "CityName": "נהורה" }, { "CityId": "80", "CityName": "נהלל" }, { "CityId": "9100", "CityName": "נהריה" }, { "CityId": "4304", "CityName": "נוב" }, { "CityId": "55", "CityName": "נוגה" }, { "CityId": "3573", "CityName": "נוה צוף" }, { "CityId": "1366", "CityName": "נווה" }, { "CityId": "926", "CityName": "נווה אבות" }, { "CityId": "590", "CityName": "נווה אור" }, { "CityId": "4303", "CityName": "נווה אטיב" }, { "CityId": "405", "CityName": "נווה אילן" }, { "CityId": "296", "CityName": "נווה איתן" }, { "CityId": "3725", "CityName": "נווה דניאל" }, { "CityId": "1057", "CityName": "נווה זוהר" }, { "CityId": "1314", "CityName": "נווה זיו" }, { "CityId": "1279", "CityName": "נווה חריף" }, { "CityId": "312", "CityName": "נווה ים" }, { "CityId": "686", "CityName": "נווה ימין" }, { "CityId": "858", "CityName": "נווה ירק" }, { "CityId": "827", "CityName": "נווה מבטח" }, { "CityId": "1071", "CityName": "נווה מיכאל" }, { "CityId": "1259", "CityName": "נווה שלום" }, { "CityId": "15", "CityName": "נועם" }, { "CityId": "1333", "CityName": "נוף איילון" }, { "CityId": "1061", "CityName": "נוף הגליל" }, { "CityId": "3790", "CityName": "נופים" }, { "CityId": "1284", "CityName": "נופית" }, { "CityId": "257", "CityName": "נופך" }, { "CityId": "3726", "CityName": "נוקדים" }, { "CityId": "447", "CityName": "נורדיה" }, { "CityId": "833", "CityName": "נורית" }, { "CityId": "59", "CityName": "נחושה" }, { "CityId": "844", "CityName": "נחל עוז" }, { "CityId": "2045", "CityName": "נחלה" }, { "CityId": "3767", "CityName": "נחליאל" }, { "CityId": "449", "CityName": "נחלים" }, { "CityId": "809", "CityName": "נחם" }, { "CityId": "522", "CityName": "נחף" }, { "CityId": "433", "CityName": "נחשולים" }, { "CityId": "777", "CityName": "נחשון" }, { "CityId": "705", "CityName": "נחשונים" }, { "CityId": "1147", "CityName": "נטועה" }, { "CityId": "4014", "CityName": "נטור" }, { "CityId": "1369", "CityName": "נטע" }, { "CityId": "174", "CityName": "נטעים" }, { "CityId": "1254", "CityName": "נטף" }, { "CityId": "523", "CityName": "ניין" }, { "CityId": "3655", "CityName": "נילי" }, { "CityId": "351", "CityName": "ניצן" }, { "CityId": "1419", "CityName": "ניצן ב'" }, { "CityId": "1195", "CityName": "ניצנה (קהילת חינוך)" }, { "CityId": "1280", "CityName": "ניצני סיני" }, { "CityId": "851", "CityName": "ניצני עוז" }, { "CityId": "359", "CityName": "ניצנים" }, { "CityId": "808", "CityName": "ניר אליהו" }, { "CityId": "553", "CityName": "ניר בנים" }, { "CityId": "720", "CityName": "ניר גלים" }, { "CityId": "256", "CityName": "ניר דוד (תל עמל)" }, { "CityId": "11", "CityName": "ניר חן" }, { "CityId": "165", "CityName": "ניר יפה" }, { "CityId": "402", "CityName": "ניר יצחק" }, { "CityId": "699", "CityName": "ניר ישראל" }, { "CityId": "2047", "CityName": "ניר משה" }, { "CityId": "69", "CityName": "ניר עוז" }, { "CityId": "348", "CityName": "ניר עם" }, { "CityId": "769", "CityName": "ניר עציון" }, { "CityId": "2048", "CityName": "ניר עקיבא" }, { "CityId": "331", "CityName": "ניר צבי" }, { "CityId": "602", "CityName": "נירים" }, { "CityId": "1236", "CityName": "נירית" }, { "CityId": "4035", "CityName": "נמרוד" }, { "CityId": "825", "CityName": "נס הרים" }, { "CityId": "1143", "CityName": "נס עמים" }, { "CityId": "7200", "CityName": "נס ציונה" }, { "CityId": "186", "CityName": "נעורים" }, { "CityId": "3787", "CityName": "נעלה" }, { "CityId": "3713", "CityName": "נעמה" }, { "CityId": "158", "CityName": "נען" }, { "CityId": "3620", "CityName": "נערן" }, { "CityId": "1041", "CityName": "נצאצרה (שבט)" }, { "CityId": "1372", "CityName": "נצר חזני" }, { "CityId": "435", "CityName": "נצר סרני" }, { "CityId": "7300", "CityName": "נצרת" }, { "CityId": "2500", "CityName": "נשר" }, { "CityId": "3555", "CityName": "נתיב הגדוד" }, { "CityId": "693", "CityName": "נתיב הלה" }, { "CityId": "1242", "CityName": "נתיב העשרה" }, { "CityId": "792", "CityName": "נתיב השיירה" }, { "CityId": "246", "CityName": "נתיבות" }, { "CityId": "7400", "CityName": "נתניה" }, { "CityId": "525", "CityName": "סאג'ור" }, { "CityId": "578", "CityName": "סאסא" }, { "CityId": "587", "CityName": "סביון" }, { "CityId": "2046", "CityName": "סגולה" }, { "CityId": "942", "CityName": "סואעד (חמרייה)" }, { "CityId": "989", "CityName": "סואעד (כמאנה) (שבט)" }, { "CityId": "526", "CityName": "סולם" }, { "CityId": "3756", "CityName": "סוסיה" }, { "CityId": "1238", "CityName": "סופה" }, { "CityId": "7500", "CityName": "סח'נין" }, { "CityId": "1170", "CityName": "סייד (שבט)" }, { "CityId": "1245", "CityName": "סלמה" }, { "CityId": "3567", "CityName": "סלעית" }, { "CityId": "1156", "CityName": "סמר" }, { "CityId": "3777", "CityName": "סנסנה" }, { "CityId": "419", "CityName": "סעד" }, { "CityId": "1360", "CityName": "סעוה" }, { "CityId": "454", "CityName": "סער" }, { "CityId": "1176", "CityName": "ספיר" }, { "CityId": "610", "CityName": "סתריה" }, { "CityId": "892", "CityName": "עבדון" }, { "CityId": "376", "CityName": "עברון" }, { "CityId": "794", "CityName": "עגור" }, { "CityId": "4501", "CityName": "ע'ג'ר" }, { "CityId": "1199", "CityName": "עדי" }, { "CityId": "2035", "CityName": "עדנים" }, { "CityId": "826", "CityName": "עוזה" }, { "CityId": "528", "CityName": "עוזייר" }, { "CityId": "737", "CityName": "עולש" }, { "CityId": "666", "CityName": "עומר" }, { "CityId": "810", "CityName": "עופר" }, { "CityId": "3617", "CityName": "עופרה" }, { "CityId": "32", "CityName": "עוצם" }, { "CityId": "957", "CityName": "עוקבי (בנו עוקבה)" }, { "CityId": "328", "CityName": "עזוז" }, { "CityId": "1149", "CityName": "עזר" }, { "CityId": "837", "CityName": "עזריאל" }, { "CityId": "711", "CityName": "עזריה" }, { "CityId": "817", "CityName": "עזריקם" }, { "CityId": "969", "CityName": "עטאוונה (שבט)" }, { "CityId": "3658", "CityName": "עטרת" }, { "CityId": "1175", "CityName": "עידן" }, { "CityId": "530", "CityName": "עיילבון" }, { "CityId": "156", "CityName": "עיינות" }, { "CityId": "511", "CityName": "עילוט" }, { "CityId": "687", "CityName": "עין איילה" }, { "CityId": "546", "CityName": "עין אל-אסד" }, { "CityId": "273", "CityName": "עין גב" }, { "CityId": "2042", "CityName": "עין גדי" }, { "CityId": "436", "CityName": "עין דור" }, { "CityId": "1240", "CityName": "עין הבשור" }, { "CityId": "74", "CityName": "עין הוד" }, { "CityId": "167", "CityName": "עין החורש" }, { "CityId": "289", "CityName": "עין המפרץ" }, { "CityId": "383", "CityName": "עין הנציב" }, { "CityId": "367", "CityName": "עין העמק" }, { "CityId": "270", "CityName": "עין השופט" }, { "CityId": "676", "CityName": "עין השלושה" }, { "CityId": "157", "CityName": "עין ורד" }, { "CityId": "4503", "CityName": "עין זיוון" }, { "CityId": "1320", "CityName": "עין חוד" }, { "CityId": "1053", "CityName": "עין חצבה" }, { "CityId": "89", "CityName": "עין חרוד (איחוד)" }, { "CityId": "82", "CityName": "עין חרוד (מאוחד)" }, { "CityId": "806", "CityName": "עין יהב" }, { "CityId": "813", "CityName": "עין יעקב" }, { "CityId": "1056", "CityName": "עין כרם-ביס חקלאי" }, { "CityId": "426", "CityName": "עין כרמל" }, { "CityId": "532", "CityName": "עין מאהל" }, { "CityId": "521", "CityName": "עין נקובא" }, { "CityId": "223", "CityName": "עין עירון" }, { "CityId": "622", "CityName": "עין צורים" }, { "CityId": "4502", "CityName": "עין קנייא" }, { "CityId": "514", "CityName": "עין ראפה" }, { "CityId": "139", "CityName": "עין שמר" }, { "CityId": "880", "CityName": "עין שריד" }, { "CityId": "1251", "CityName": "עין תמר" }, { "CityId": "871", "CityName": "עינת" }, { "CityId": "1187", "CityName": "עיר אובות" }, { "CityId": "7600", "CityName": "עכו" }, { "CityId": "1146", "CityName": "עלומים" }, { "CityId": "3765", "CityName": "עלי" }, { "CityId": "3727", "CityName": "עלי זהב" }, { "CityId": "688", "CityName": "עלמה" }, { "CityId": "3715", "CityName": "עלמון" }, { "CityId": "1212", "CityName": "עמוקה" }, { "CityId": "3824", "CityName": "עמיחי" }, { "CityId": "779", "CityName": "עמינדב" }, { "CityId": "385", "CityName": "עמיעד" }, { "CityId": "318", "CityName": "עמיעוז" }, { "CityId": "773", "CityName": "עמיקם" }, { "CityId": "319", "CityName": "עמיר" }, { "CityId": "3660", "CityName": "עמנואל" }, { "CityId": "708", "CityName": "עמקה" }, { "CityId": "3712", "CityName": "ענב" }, { "CityId": "534", "CityName": "עספיא" }, { "CityId": "7700", "CityName": "עפולה" }, { "CityId": "917", "CityName": "עצמון שגב" }, { "CityId": "531", "CityName": "עראבה" }, { "CityId": "1246", "CityName": "עראמשה" }, { "CityId": "1335", "CityName": "ערב אל נעים" }, { "CityId": "2560", "CityName": "ערד" }, { "CityId": "593", "CityName": "ערוגות" }, { "CityId": "637", "CityName": "ערערה" }, { "CityId": "1192", "CityName": "ערערה-בנגב" }, { "CityId": "3861", "CityName": "עשהאל" }, { "CityId": "591", "CityName": "עשרת" }, { "CityId": "53", "CityName": "עתלית" }, { "CityId": "3748", "CityName": "עתניאל" }, { "CityId": "1151", "CityName": "פארן" }, { "CityId": "3768", "CityName": "פדואל" }, { "CityId": "750", "CityName": "פדויים" }, { "CityId": "838", "CityName": "פדיה" }, { "CityId": "1104", "CityName": "פוריה - כפר עבודה" }, { "CityId": "1105", "CityName": "פוריה - נווה עובד" }, { "CityId": "1313", "CityName": "פוריה עילית" }, { "CityId": "537", "CityName": "פוריידיס" }, { "CityId": "767", "CityName": "פורת" }, { "CityId": "749", "CityName": "פטיש" }, { "CityId": "1185", "CityName": "פלך" }, { "CityId": "597", "CityName": "פלמחים" }, { "CityId": "3723", "CityName": "פני חבר" }, { "CityId": "3659", "CityName": "פסגות" }, { "CityId": "535", "CityName": "פסוטה" }, { "CityId": "2059", "CityName": "פעמי תשז" }, { "CityId": "3615", "CityName": "פצאל" }, { "CityId": "536", "CityName": "פקיעין (בוקייעה)" }, { "CityId": "281", "CityName": "פקיעין חדשה" }, { "CityId": "7800", "CityName": "פרדס חנה-כרכור" }, { "CityId": "171", "CityName": "פרדסיה" }, { "CityId": "599", "CityName": "פרוד" }, { "CityId": "2053", "CityName": "פרזון" }, { "CityId": "1231", "CityName": "פרי גן" }, { "CityId": "7900", "CityName": "פתח תקווה" }, { "CityId": "839", "CityName": "פתחיה" }, { "CityId": "413", "CityName": "צאלים" }, { "CityId": "1180", "CityName": "צביה" }, { "CityId": "1213", "CityName": "צבעון" }, { "CityId": "465", "CityName": "צובה" }, { "CityId": "1136", "CityName": "צוחר" }, { "CityId": "1111", "CityName": "צופיה" }, { "CityId": "3791", "CityName": "צופים" }, { "CityId": "198", "CityName": "צופית" }, { "CityId": "1150", "CityName": "צופר" }, { "CityId": "1102", "CityName": "צוקי ים" }, { "CityId": "1262", "CityName": "צוקים" }, { "CityId": "1113", "CityName": "צור הדסה" }, { "CityId": "1345", "CityName": "צור יצחק" }, { "CityId": "276", "CityName": "צור משה" }, { "CityId": "1148", "CityName": "צור נתן" }, { "CityId": "774", "CityName": "צוריאל" }, { "CityId": "1221", "CityName": "צורית" }, { "CityId": "613", "CityName": "ציפורי" }, { "CityId": "796", "CityName": "צלפון" }, { "CityId": "636", "CityName": "צנדלה" }, { "CityId": "594", "CityName": "צפריה" }, { "CityId": "1079", "CityName": "צפרירים" }, { "CityId": "8000", "CityName": "צפת" }, { "CityId": "612", "CityName": "צרופה" }, { "CityId": "567", "CityName": "צרעה" }, { "CityId": "1234", "CityName": "קבועה (שבט)" }, { "CityId": "334", "CityName": "קבוצת יבנה" }, { "CityId": "3557", "CityName": "קדומים" }, { "CityId": "195", "CityName": "קדימה-צורן" }, { "CityId": "392", "CityName": "קדמה" }, { "CityId": "4025", "CityName": "קדמת צבי" }, { "CityId": "3781", "CityName": "קדר" }, { "CityId": "615", "CityName": "קדרון" }, { "CityId": "1211", "CityName": "קדרים" }, { "CityId": "964", "CityName": "קודייראת א-צאנע(שבט)" }, { "CityId": "972", "CityName": "קוואעין (שבט)" }, { "CityId": "766", "CityName": "קוממיות" }, { "CityId": "1179", "CityName": "קורנית" }, { "CityId": "1052", "CityName": "קטורה" }, { "CityId": "1167", "CityName": "קיסריה" }, { "CityId": "414", "CityName": "קלחים" }, { "CityId": "3601", "CityName": "קליה" }, { "CityId": "638", "CityName": "קלנסווה" }, { "CityId": "4024", "CityName": "קלע" }, { "CityId": "1243", "CityName": "קציר" }, { "CityId": "1347", "CityName": "קצר א-סר" }, { "CityId": "4100", "CityName": "קצרין" }, { "CityId": "2620", "CityName": "קרית אונו" }, { "CityId": "3611", "CityName": "קרית ארבע" }, { "CityId": "6800", "CityName": "קרית אתא" }, { "CityId": "9500", "CityName": "קרית ביאליק" }, { "CityId": "2630", "CityName": "קרית גת" }, { "CityId": "2300", "CityName": "קרית טבעון" }, { "CityId": "9600", "CityName": "קרית ים" }, { "CityId": "1137", "CityName": "קרית יערים" }, { "CityId": "2039", "CityName": "קרית יערים(מוסד)" }, { "CityId": "8200", "CityName": "קרית מוצקין" }, { "CityId": "1034", "CityName": "קרית מלאכי" }, { "CityId": "3746", "CityName": "קרית נטפים" }, { "CityId": "78", "CityName": "קרית ענבים" }, { "CityId": "469", "CityName": "קרית עקרון" }, { "CityId": "412", "CityName": "קרית שלמה" }, { "CityId": "2800", "CityName": "קרית שמונה" }, { "CityId": "3640", "CityName": "קרני שומרון" }, { "CityId": "4006", "CityName": "קשת" }, { "CityId": "543", "CityName": "ראמה" }, { "CityId": "1334", "CityName": "ראס אל-עין" }, { "CityId": "990", "CityName": "ראס עלי" }, { "CityId": "2640", "CityName": "ראש העין" }, { "CityId": "26", "CityName": "ראש פינה" }, { "CityId": "3602", "CityName": "ראש צורים" }, { "CityId": "8300", "CityName": "ראשון לציון" }, { "CityId": "3795", "CityName": "רבבה" }, { "CityId": "564", "CityName": "רבדים" }, { "CityId": "354", "CityName": "רביבים" }, { "CityId": "1225", "CityName": "רביד" }, { "CityId": "390", "CityName": "רגבה" }, { "CityId": "444", "CityName": "רגבים" }, { "CityId": "1161", "CityName": "רהט" }, { "CityId": "2051", "CityName": "רווחה" }, { "CityId": "2016", "CityName": "רוויה" }, { "CityId": "1341", "CityName": "רוח מדבר" }, { "CityId": "362", "CityName": "רוחמה" }, { "CityId": "539", "CityName": "רומאנה" }, { "CityId": "997", "CityName": "רומת הייב" }, { "CityId": "3619", "CityName": "רועי" }, { "CityId": "3782", "CityName": "רותם" }, { "CityId": "854", "CityName": "רחוב" }, { "CityId": "8400", "CityName": "רחובות" }, { "CityId": "3822", "CityName": "רחלים" }, { "CityId": "540", "CityName": "ריחאניה" }, { "CityId": "3568", "CityName": "ריחן" }, { "CityId": "542", "CityName": "ריינה" }, { "CityId": "3565", "CityName": "רימונים" }, { "CityId": "616", "CityName": "רינתיה" }, { "CityId": "922", "CityName": "רכסים" }, { "CityId": "1069", "CityName": "רם-און" }, { "CityId": "4702", "CityName": "רמות" }, { "CityId": "206", "CityName": "רמות השבים" }, { "CityId": "735", "CityName": "רמות מאיר" }, { "CityId": "445", "CityName": "רמות מנשה" }, { "CityId": "372", "CityName": "רמות נפתלי" }, { "CityId": "8500", "CityName": "רמלה" }, { "CityId": "8600", "CityName": "רמת גן" }, { "CityId": "135", "CityName": "רמת דוד" }, { "CityId": "184", "CityName": "רמת הכובש" }, { "CityId": "335", "CityName": "רמת השופט" }, { "CityId": "2650", "CityName": "רמת השרון" }, { "CityId": "4029", "CityName": "רמת טראמפ" }, { "CityId": "178", "CityName": "רמת יוחנן" }, { "CityId": "122", "CityName": "רמת ישי" }, { "CityId": "4701", "CityName": "רמת מגשימים" }, { "CityId": "339", "CityName": "רמת צבי" }, { "CityId": "460", "CityName": "רמת רזיאל" }, { "CityId": "127", "CityName": "רמת רחל" }, { "CityId": "789", "CityName": "רנן" }, { "CityId": "713", "CityName": "רעים" }, { "CityId": "8700", "CityName": "רעננה" }, { "CityId": "1228", "CityName": "רקפת" }, { "CityId": "247", "CityName": "רשפון" }, { "CityId": "437", "CityName": "רשפים" }, { "CityId": "1260", "CityName": "רתמים" }, { "CityId": "324", "CityName": "שאר ישוב" }, { "CityId": "1377", "CityName": "שבי דרום" }, { "CityId": "282", "CityName": "שבי ציון" }, { "CityId": "3571", "CityName": "שבי שומרון" }, { "CityId": "913", "CityName": "שבלי - אום אל-גנם" }, { "CityId": "1286", "CityName": "שגב-שלום" }, { "CityId": "721", "CityName": "שדה אילן" }, { "CityId": "304", "CityName": "שדה אליהו" }, { "CityId": "861", "CityName": "שדה אליעזר" }, { "CityId": "885", "CityName": "שדה בוקר" }, { "CityId": "36", "CityName": "שדה דוד" }, { "CityId": "284", "CityName": "שדה ורבורג" }, { "CityId": "293", "CityName": "שדה יואב" }, { "CityId": "142", "CityName": "שדה יעקב" }, { "CityId": "2008", "CityName": "שדה יצחק" }, { "CityId": "18", "CityName": "שדה משה" }, { "CityId": "259", "CityName": "שדה נחום" }, { "CityId": "329", "CityName": "שדה נחמיה" }, { "CityId": "1058", "CityName": "שדה ניצן" }, { "CityId": "739", "CityName": "שדה עוזיהו" }, { "CityId": "2049", "CityName": "שדה צבי" }, { "CityId": "327", "CityName": "שדות ים" }, { "CityId": "27", "CityName": "שדות מיכה" }, { "CityId": "1223", "CityName": "שדי אברהם" }, { "CityId": "2015", "CityName": "שדי חמד" }, { "CityId": "2057", "CityName": "שדי תרומות" }, { "CityId": "555", "CityName": "שדמה" }, { "CityId": "306", "CityName": "שדמות דבורה" }, { "CityId": "3578", "CityName": "שדמות מחולה" }, { "CityId": "1031", "CityName": "שדרות" }, { "CityId": "741", "CityName": "שואבה" }, { "CityId": "761", "CityName": "שובה" }, { "CityId": "394", "CityName": "שובל" }, { "CityId": "1304", "CityName": "שוהם" }, { "CityId": "614", "CityName": "שומרה" }, { "CityId": "1265", "CityName": "שומריה" }, { "CityId": "415", "CityName": "שוקדה" }, { "CityId": "456", "CityName": "שורש" }, { "CityId": "1235", "CityName": "שורשים" }, { "CityId": "224", "CityName": "שושנת העמקים" }, { "CityId": "527", "CityName": "שזור" }, { "CityId": "7", "CityName": "שחר" }, { "CityId": "1266", "CityName": "שחרות" }, { "CityId": "3868", "CityName": "שחרית" }, { "CityId": "865", "CityName": "שיבולים" }, { "CityId": "1378", "CityName": "שיזף" }, { "CityId": "1267", "CityName": "שיטים" }, { "CityId": "658", "CityName": "שייח' דנון" }, { "CityId": "3641", "CityName": "שילה" }, { "CityId": "1165", "CityName": "שילת" }, { "CityId": "1160", "CityName": "שכניה" }, { "CityId": "873", "CityName": "שלווה" }, { "CityId": "1373", "CityName": "שלווה במדבר" }, { "CityId": "439", "CityName": "שלוחות" }, { "CityId": "812", "CityName": "שלומי" }, { "CityId": "1364", "CityName": "שלומית" }, { "CityId": "366", "CityName": "שמיר" }, { "CityId": "3784", "CityName": "שמעה" }, { "CityId": "432", "CityName": "שמרת" }, { "CityId": "1337", "CityName": "שמשית" }, { "CityId": "1287", "CityName": "שני" }, { "CityId": "1132", "CityName": "שניר" }, { "CityId": "538", "CityName": "שעב" }, { "CityId": "4009", "CityName": "שעל" }, { "CityId": "856", "CityName": "שעלבים" }, { "CityId": "661", "CityName": "שער אפרים" }, { "CityId": "264", "CityName": "שער הגולן" }, { "CityId": "237", "CityName": "שער העמקים" }, { "CityId": "921", "CityName": "שער מנשה" }, { "CityId": "3826", "CityName": "שער שומרון" }, { "CityId": "232", "CityName": "שפיים" }, { "CityId": "692", "CityName": "שפיר" }, { "CityId": "846", "CityName": "שפר" }, { "CityId": "8800", "CityName": "שפרעם" }, { "CityId": "3649", "CityName": "שקד" }, { "CityId": "1233", "CityName": "שקף" }, { "CityId": "292", "CityName": "שרונה" }, { "CityId": "1114", "CityName": "שריגים (לי-און)" }, { "CityId": "126", "CityName": "שריד" }, { "CityId": "398", "CityName": "שרשרת" }, { "CityId": "1045", "CityName": "שתולה" }, { "CityId": "763", "CityName": "שתולים" }, { "CityId": "2062", "CityName": "תאשור" }, { "CityId": "2061", "CityName": "תדהר" }, { "CityId": "1172", "CityName": "תובל" }, { "CityId": "3558", "CityName": "תומר" }, { "CityId": "1083", "CityName": "תושיה" }, { "CityId": "163", "CityName": "תימורים" }, { "CityId": "10", "CityName": "תירוש" }, { "CityId": "5000", "CityName": "תל אביב - יפו" }, { "CityId": "84", "CityName": "תל יוסף" }, { "CityId": "287", "CityName": "תל יצחק" }, { "CityId": "154", "CityName": "תל מונד" }, { "CityId": "103", "CityName": "תל עדשים" }, { "CityId": "3815", "CityName": "תל ציון" }, { "CityId": "719", "CityName": "תל קציר" }, { "CityId": "1054", "CityName": "תל שבע" }, { "CityId": "1283", "CityName": "תל תאומים" }, { "CityId": "3719", "CityName": "תלם" }, { "CityId": "1051", "CityName": "תלמי אליהו" }, { "CityId": "2003", "CityName": "תלמי אלעזר" }, { "CityId": "2050", "CityName": "תלמי בילו" }, { "CityId": "1237", "CityName": "תלמי יוסף" }, { "CityId": "727", "CityName": "תלמי יחיאל" }, { "CityId": "744", "CityName": "תלמי יפה" }, { "CityId": "814", "CityName": "תלמים" }, { "CityId": "1244", "CityName": "תמרת" }, { "CityId": "2002", "CityName": "תנובות" }, { "CityId": "752", "CityName": "תעוז" }, { "CityId": "709", "CityName": "תפרח" }, { "CityId": "665", "CityName": "תקומה" }, { "CityId": "3563", "CityName": "תקוע" }, { "CityId": "970", "CityName": "תראבין א-צאנע (שבט)" }, { "CityId": "1346", "CityName": "תראבין א-צאנע(ישוב)" }, { "CityId": "778", "CityName": "תרום" }]


        for (i = 0; i < ListCitysLocal.length; i++) {
            window.ListCityGlobal.push({ name: ListCitysLocal[i].CityName.trim(), Cityid: ListCitysLocal[i].CityId.trim() })
        }

        DidNotSucceed.push(data)

        for (i = 0; i < DidNotSucceed.length; i++) {
            listCityGetAllCity(DidNotSucceed[i])
        }

        //}).error(function () {
        //    swal({
        //        title: "שגיאה בקבלת נתונים. בדוק תקשורת",
        //        type: "error",
        //        showCancelButton: false,
        //        confirmButtonText: 'אישור',
        //        closeOnConfirm: true,
        //        allowOutsideClick: false,
        //    })
        //})
        return false;
    }


    if (window.ListCityGlobal[0] == undefined) {
        DidNotSucceed.push(data)
        return false;
    }



    window[data.NameVariable] = window.ListCityGlobal.filter(function (elm) { return RemoveCity_ByCityId.indexOf(Number(elm.Cityid)) == -1 })
    //console.log(window[data.NameVariable])

    if (listCitys) {
        if (JSON.stringify(listCitys) != '[]') {
            window[data.NameVariable] = window[data.NameVariable].filter(function (elm) { return listCitys.indexOf(elm.name) > -1 })
        }
    }

    window[data.NameVariable].sort(function (a, b) {
        if (a.name < b.name) return -1
        return a.name > b.name ? 1 : 0
    })


    if (window[data.NameVariable].length == 1) {
        $(city).val(window[data.NameVariable][0].name).attr('Cityid', window[data.NameVariable][0].Cityid)
    }

    if (CityDefault && CityDefault != "") {
        var CityDefaultJson = window[data.NameVariable].filter(function (elm) { return elm.name == CityDefault })
        if (CityDefaultJson[0]) {
            $(city).val(CityDefaultJson[0].name).attr('Cityid', CityDefaultJson[0].Cityid)
        }
    }


    listCityBuildHtml(data.NameVariable, city, Adders, Action)

}



function listCityBuildHtml(NameVariable, City, Adders, Action) {
    var html = ''
    html += '<style>'
    html += '.listCityModal {'
    html += 'display: none;'
    html += 'position: fixed;'
    html += 'z-index: 100;'
    html += 'left: 0;'
    html += 'top: 0;'
    html += 'width: 100%;'
    html += 'height: 100%;'
    html += 'overflow: auto;'
    html += 'padding: 14px 0;'
    html += 'box-sizing: border-box;'
    html += 'background-color: rgba(0, 0, 0, 0.5);}'

    html += '.listCitymodal-content {'
    html += 'max-width:400px;'
    html += 'margin: 5px auto 20px;'
    html += 'background-color: #fefefe;'
    html += 'padding: 20px;'
    html += 'border: 1px solid #888;'
    html += 'width: 80%;'
    html += 'color: #808080;'
    html += 'font-family: "Assistant", sans-serif;'
    html += '-webkit-box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.75);'
    html += 'background-color: white;'
    html += 'max-width: 500px;'
    html += 'min-width: 200px;'
    html += 'min-height: 250px;'
    html += 'position: relative;'
    html += 'border-radius: 20px;'
    html += 'box-sizing: border-box;'
    html += 'text-align: center;}'

    html += '.td_' + NameVariable + ' {'
    html += 'color: #2B3A63;'
    html += 'font-size: 20px;'
    html += 'border-bottom: 1px solid #d7cece;'
    html += 'padding-left: 5px;'
    html += 'padding-right: 5px;'
    html += 'padding-top: 15px;'
    html += 'padding-bottom: 15px;}'


    html += '.th_' + NameVariable + ' {'
    html += 'color: #2B3A63;'
    html += 'font-family: assistant,Arial;}'


    html += '.TableLightFont {'
    html += 'font-weight: lighter;'
    html += 'font-size: 14px;}'

    html += '.table_' + NameVariable + ' {'
    html += 'border-collapse: collapse;'
    html += 'border: 1px solid #d7cece;'
    html += 'font-family: "Assistant", sans-serif;'
    html += 'margin-right: auto;'
    html += 'margin-left: auto;}'

    html += '.tr_' + NameVariable + ':nth-child(even) {'
    html += 'background-color: #f2f2f2;}'
    html += '</style>'


    html += '<div dir="rtl" id="CardFixed_' + NameVariable + '1_listCity" class="listCityModal" onclick="if (event.target == this) listCityOpenCloseCardFixed(\'Close\', \'' + NameVariable + '1\')">'
    html += '<div class="listCitymodal-content">'
    html += '<div style="-webkit-user-select: none;"> <span style="cursor: pointer; width: 42px; height: auto; margin-top: 10px; margin-right: 10px; position: absolute; background: indianred; padding: 6px 8px; color: white; font-weight: 600; font-size: 22px; border-radius: 8px 16px; top: -6px; right: -6px;box-sizing: border-box;" onclick="listCityOpenCloseCardFixed(\'Close\', \'' + NameVariable + '1\')">X</span>'
    html += '<div style="text-align:center">'
    html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 10px; -webkit-user-select: none; text-align: center; padding: 0;">בחר עיר:</div>'
    html += '<input autocomplete="off" id="CardFixed_' + NameVariable + '1_listCity_Search" style="-webkit-appearance: none; font-family: Assistant,Arial; font-size: large; color: #3f475e;outline: none; padding: 6px; border-color: #f7bb4d; border-style: solid; border-width: 0px 0px 2px 0px; margin: 5px 5px; background-color: #FFFFFB; -webkit-box-sizing: border-box;text-align:center" type="text" placeholder="חפש עיר" />'
    html += '<div style="padding: 5px 0 13px;">סה"כ תוצאות: <span id="CardFixed_' + NameVariable + '1_listCity_Count"></span></div>'
    html += '<table class="table__' + NameVariable + '" id="CardFixed_' + NameVariable + '1_listCity_Table" style="text-align:center;width:95%;font-size:medium;background-color:white"></table>'
    html += '</div></div></div></div>'


    if (Adders != '') {
        html += '<div dir="rtl" id="CardFixed_' + NameVariable + '2_listCity" class="listCityModal" onclick="if (event.target == this) listCityOpenCloseCardFixed(\'Close\', \'' + NameVariable + '2\')">'
        html += '<div class="listCitymodal-content">'
        html += '<div style="-webkit-user-select: none;"> <span style="cursor: pointer; width: 42px; height: auto; margin-top: 10px; margin-right: 10px; position: absolute; background: indianred; padding: 6px 8px; color: white; font-weight: 600; font-size: 22px; border-radius: 8px 16px; top: -6px; right: -6px;box-sizing: border-box;" onclick="listCityOpenCloseCardFixed(\'Close\', \'' + NameVariable + '2\')">X</span>'
        html += '<div style="text-align:center">'
        html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 10px; -webkit-user-select: none; text-align: center; padding: 0;">בחר רחוב:</div>'
        html += '<input autocomplete="off" id="CardFixed_' + NameVariable + '2_listCity_Search" style="-webkit-appearance: none; font-family: Assistant,Arial; font-size: large; color: #3f475e;outline: none; padding: 6px; border-color: #f7bb4d; border-style: solid; border-width: 0px 0px 2px 0px; margin: 5px 5px; background-color: #FFFFFB; -webkit-box-sizing: border-box;text-align:center" type="text" placeholder="חפש רחוב" />'
        html += '<div id="CardFixed_' + NameVariable + '2_listCitywait" style="display:none;padding: 5px 0 13px;"><img style="width: 49px;" src="https://matara.pro/nedarimplus/waitnew.gif"/><div>נא להמתין..</div></div>'
        html += '<div id="CardFixed_' + NameVariable + '2_listCity_Count" style="padding: 5px 0 13px;">סה"כ תוצאות: <span></span></div>'
        html += '<table class="table__' + NameVariable + '" id="CardFixed_' + NameVariable + '2_listCity_Table" style="text-align:center;width:95%;font-size:medium;background-color:white"></table>'
        html += '</div></div></div>'
    }

    $('body').append(html)


    if (City != '') {
        $(City).focus(function () {
            $(City).blur()
            $('#CardFixed_' + NameVariable + '1_listCity_Search').on('input', function () {
                CardFixed_1_listCityDom(NameVariable, $('#CardFixed_' + NameVariable + '1_listCity_Search').val(), City, Adders, Action)
            });
            CardFixed_1_listCityDom(NameVariable, '', City, Adders, Action)
            listCityOpenCloseCardFixed('Open', NameVariable + '1')
        });
    }


    if (Adders != '') {
        $(Adders).focus(function () {
            $(Adders).blur()
            if ($(City).val() == '') {
                $(City).focus()
                return false
            }

            $('#CardFixed_' + NameVariable + '2_listCity_Search').on('input', function () {
                CardFixed_2_listCityDom(NameVariable, $('#CardFixed_' + NameVariable + '2_listCity_Search').val(), Adders)
            });

            CardFixed_2_listGetAdders(NameVariable, '', Adders, City)
            listCityOpenCloseCardFixed('Open', NameVariable + '2')
        });
    }
}


function CardFixed_1_listCityDom(NameVariable, Search, idcity, Idadders, Action) {
    $('#CardFixed_' + NameVariable + '1_listCity_Table').html('')
    var KeyWord = Search.split(' ')
    var Counter = 0
    for (var i = 0; i < window[NameVariable].length; i++) {
        var Exist = true
        for (var j = 0; j < KeyWord.length; j++) {
            if (window[NameVariable][i].name.indexOf(KeyWord[j]) < 0) { Exist = false }
        }
        if (window[NameVariable][i].name == Search) { Exist = true }
        if (Exist == true) {
            Counter += 1
            if (Counter > 200) continue;
            $('#CardFixed_' + NameVariable + '1_listCity_Table').append('<tr class="tr_' + NameVariable + '"><td class="td_' + NameVariable + '" id="CardFixed_' + NameVariable + '1_listCity_Table_Row_' + i + '" style="user-select: none;cursor:pointer;font-weight:bold;width:80%;text-align:right"><div style="text-align:center;font-size: 20px;color: #2B3A63;">' + window[NameVariable][i].name + '</div></td></tr>');
            (function (i) {
                $('#CardFixed_' + NameVariable + '1_listCity_Table_Row_' + i).click(function () {
                    if ($(idcity).val() != window[NameVariable][i].name) {
                        $(idcity).val(window[NameVariable][i].name).attr('Cityid', window[NameVariable][i].Cityid)
                        $(Idadders).val('')
                    }

                    if (window["FunctionAfetrSelectCity"] != undefined) {
                        window["FunctionAfetrSelectCity"]()
                    }

                    if (Action == true) {
                        $(Idadders).focus()
                    }
                    listCityOpenCloseCardFixed('Close', NameVariable + '1')
                });
            })(i);
        };
    }
    $('#CardFixed_' + NameVariable + '1_listCity_Count').html(Counter)
}


function CardFixed_2_listGetAdders(NameVariable, Search, Idadders, idcity) {
    if (!window["Last_" + idcity.replace("#", "")]) {
        window["Last_" + idcity.replace("#", "")] = ""
    }
    if ($(idcity).val() == window["Last_" + idcity.replace("#", "")]) {
        CardFixed_2_listCityDom(NameVariable, Search, Idadders)
        return false
    } else {
        window["Last_" + idcity.replace("#", "")] = $(idcity).val()
    }

    $("#CardFixed_" + NameVariable + "2_listCity_Table").html('')
    window[Idadders.replace("#", "") + "_CardAdders"] = []

    $("#CardFixed_" + NameVariable + "2_listCity_Count").hide()
    $("#CardFixed_" + NameVariable + "2_listCitywait").show()

    $.ajax({
        url: "/nedarimplus/Forms/Manage.aspx?Action=GetStreets&Cityid=" + $(idcity).attr('Cityid'),
        context: Text,
        timeout: 16000,
    }).success(function (res) {

        if (res.Status == 'Error') {
            swal({
                title: res.Message,
                type: "error",
                showCancelButton: false,
                confirmButtonText: 'אישור',
                closeOnConfirm: true,
                allowOutsideClick: false,
            })
            return false
        }

        for (i = 0; i < res.Data.length; i++) {
            window[Idadders.replace("#", "") + "_CardAdders"].push({ name: res.Data[i].StreetName.trim() })
        }

        window[Idadders.replace("#", "") + "_CardAdders"].sort(function (a, b) {
            if (a.name < b.name) return -1
            return a.name > b.name ? 1 : 0
        })

        CardFixed_2_listCityDom(NameVariable, Search, Idadders)
    }).error(function () {
        swal({
            title: "שגיאה בקבלת נתונים. בדוק תקשורת",
            type: "error",
            showCancelButton: false,
            confirmButtonText: 'אישור',
            closeOnConfirm: true,
            allowOutsideClick: false,
        })
    }).complete(function () {
        $("#CardFixed_" + NameVariable + "2_listCity_Count").show()
        $("#CardFixed_" + NameVariable + "2_listCitywait").hide()
    });
}
function CardFixed_2_listCityDom(NameVariable, Search, Idadders) {
    $("#CardFixed_" + NameVariable + "2_listCity_Table").html('')
    var KeyWord = Search.split(' ')
    var Counter = 0
    for (var i = 0; i < window[Idadders.replace("#", "") + "_CardAdders"].length; i++) {
        var Exist = true
        for (var j = 0; j < KeyWord.length; j++) {
            if (window[Idadders.replace("#", "") + "_CardAdders"][i].name.indexOf(KeyWord[j]) < 0) { Exist = false }
        }
        if (window[Idadders.replace("#", "") + "_CardAdders"][i].name == Search) { Exist = true }
        if (Exist == true) {
            Counter += 1
            if (Counter > 200) continue;
            $("#CardFixed_" + NameVariable + "2_listCity_Table").append('<tr class="tr_' + NameVariable + '"><td class="td_' + NameVariable + '"  id="CardFixed_' + NameVariable + '2_listCity_Table_Row_' + i + '" style="user-select: none;cursor:pointer;font-weight:bold;width:80%;text-align:right"><div style="text-align:center;font-size: 20px;color: #2B3A63;">' + window[Idadders.replace("#", "") + "_CardAdders"][i].name + '</div></td></tr>');
            (function (i) {
                $("#CardFixed_" + NameVariable + "2_listCity_Table_Row_" + i).click(function () {
                    $(Idadders).val(window[Idadders.replace("#", "") + "_CardAdders"][i].name)
                    listCityOpenCloseCardFixed('Close', NameVariable + '2')
                });
            })(i);
        };
    }
    $('#CardFixed_' + NameVariable + '2_listCity_Count span').html(Counter)
}











//CreatingPopUpWindowDoubel({
//    // הגדרות לחלון ראשון
//    ElementIdCard1: 'Country',
//    TitleCard1: 'שכונה',
//    SearchCard1: true,
//    SortCard1: true,
//    DeleteDuplicatesCard1: true,
//    FocusCard1: true,


//    // הגדרות לחלון שני
//    Card2: true,
//    ElementIdCard2: 'City',
//    TitleCard2: 'בית מדרש',
//    SearchCard2: true,
//    SortCard2: true,
//    DeleteDuplicatesCard2: true,
//    FocusCard2: true,
//    AutoFillOneResultCard2: true,


//    // הגדרות לחלון שלישי
//    Card3: true,
//    ElementIdCard3: 'Street',
//    TitleCard3: 'כתובת ביה\"מד',
//    SearchCard3: true,
//    SortCard3: true,
//    DeleteDuplicatesCard3: true,
//    FocusCard3: true,
//    AutoFillOneResultCard3: true,

//    // הגדרות לחלון רביעי
//    Card4: true,
//    ElementIdCard4: 'Street1',
//    TitleCard4: 'ראש החבורה',
//    SearchCard4: true,
//    SortCard4: true,
//    DeleteDuplicatesCard4: true,
//    FocusCard4: true,
//    AutoFillOneResultCard4: true,

//    // אם לפתוח את החלון הבא אחרי הבחירה
//    OpenCard2AfterSelectCard1: true,
//    OpenCard3AfterSelectCard2: true,
//    OpenCard4AfterSelectCard3: true,

//    // רשימה
//    http://www.unit-conversion.info/texttools/replace-text/
//    ArrayData: [
//        { "Card1": "ארמון הנציב ", "Card2": "חניכי הישיבות ", "Card3": "יעקב רז 19", "Card4": "הרב חגי לוי" }]
//})


function CreatingPopUpWindowDoubel(Data) {
    var html = ''
    html += '<div id="PopUpWindow_' + Data.ElementIdCard1 + '" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.5);display:none;">'
    html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 450px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
    html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" onclick="$(this).parent().parent().hide()" >X</span>'
    html += '<div style="text-align:center">'
    html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 18px; -webkit-user-select: none; text-align: center; padding: 0;">בחר ' + Data.TitleCard1 + ':</div>'
    html += '<input id="PopUpWindowSearch_' + Data.ElementIdCard1 + '" style="-webkit-appearance: none; font-size: large; color: #3f475e; text-align: center; padding: 6px; border-color: #f7bb4d; border-style: solid; border-width: 0px 0px 2px 0px; margin: 5px 5px; background-color: #FFFFFB; -webkit-box-sizing: border-box;margin-top: -7px;display:none;" type="text" placeholder="חפש ' + Data.TitleCard1 + '" />'
    html += '<div id="CardFixedCount_' + Data.ElementIdCard1 + '" style="padding: 5px 0 13px;display:none">סה"כ תוצאות: <span></span></div>'
    html += '<table id="PopUpWindowTable_' + Data.ElementIdCard1 + '" style="text-align:center;width:95%;font-size:medium;background-color:white"></table>'
    html += '</div></div></div>'


    $('body').append(html)


    $("#" + Data.ElementIdCard1).focus(function () {
        $("#PopUpWindow_" + Data.ElementIdCard1).show()
        $("#" + Data.ElementIdCard1).blur()
        $('#PopUpWindowSearch_' + Data.ElementIdCard1).val('')
        PopUpWindowSearchCard1()
        if (Data.FocusCard1 == true) {
            $('#PopUpWindowSearch_' + Data.ElementIdCard1).focus()
        }
    });

    var ArrayDataParsCard1 = []
    if (Data.DeleteDuplicatesCard1 == true) {
        for (i = 0; i < Data.ArrayData.length; i++) {
            if (ArrayDataParsCard1.indexOf(Data.ArrayData[i].Card1) == -1) {
                ArrayDataParsCard1.push(Data.ArrayData[i].Card1)
            }
        }
    } else {
        for (i = 0; i < Data.ArrayData.length; i++) {
            ArrayDataParsCard1.push(Data.ArrayData[i].Card1)
        }
    }


    if (Data.SortCard1 == true) {
        ArrayDataParsCard1.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        })
    }

    function PopUpWindowSearchCard1() {
        $('#PopUpWindowTable_' + Data.ElementIdCard1).html('')
        var KeyWord = $('#PopUpWindowSearch_' + Data.ElementIdCard1).val().split(' ')
        var Counter = 0
        for (var i = 0; i < ArrayDataParsCard1.length; i++) {
            var Exist = true
            for (var j = 0; j < KeyWord.length; j++) {
                if (ArrayDataParsCard1[i].indexOf(KeyWord[j]) < 0) { Exist = false }
            }
            if (ArrayDataParsCard1[i] == $('#PopUpWindowSearch_' + Data.ElementIdCard1).val()) { Exist = true }
            if (Exist == true) {
                Counter += 1
                $('#PopUpWindowTable_' + Data.ElementIdCard1).append('<tr><td id="PopUpWindowBt_' + Data.ElementIdCard1 + i + '" style="user-select: none;cursor:pointer;font-weight:bold;width:80%;text-align:right"><div style="text-align:center;font-size: 20px;color: #2B3A63;">' + ArrayDataParsCard1[i] + '</div></td></tr>');
                (function (i) {
                    $('#PopUpWindowBt_' + Data.ElementIdCard1 + i).click(function () {
                        if ($("#" + Data.ElementIdCard1).val() != ArrayDataParsCard1[i]) {
                            $("#" + Data.ElementIdCard1).val(ArrayDataParsCard1[i])
                            if (Data.Card2 == true) {
                                $("#" + Data.ElementIdCard2).val('');
                            }
                            if (Data.Card3 == true) {
                                $("#" + Data.ElementIdCard3).val('');
                            }
                            if (Data.Card4 == true) {
                                $("#" + Data.ElementIdCard4).val('');
                            }
                        }
                        $("#PopUpWindow_" + Data.ElementIdCard1).hide()
                        setTimeout(function () { ScrollUp($('#' + Data.ElementIdCard1)) }, 100);
                        if (Data.Card2 == true) {
                            if (Data.OpenCard2AfterSelectCard1 == true) {
                                Card2Focus()
                            }
                        }
                    });
                })(i);
            };
        }
        $('#CardFixedCount_' + Data.ElementIdCard1 + ' span').html(Counter)
    }

    PopUpWindowSearchCard1()

    $('#PopUpWindowSearch_' + Data.ElementIdCard1).on('input', function () {
        PopUpWindowSearchCard1()
    })

    if (Data.SearchCard1 == true) {
        $('#PopUpWindowSearch_' + Data.ElementIdCard1).show()
        $('#CardFixedCount_' + Data.ElementIdCard1).show()
    }




    //////////////////  Card2


    function Card2Focus() {
        if (Data.AutoFillOneResultCard2 == true) {
            var TotalFilter = Data.ArrayData.filter(function (elm) {
                return $("#" + Data.ElementIdCard1).val() == elm.Card1
            })

            var TotalFilterDeleteDuplicates = TotalFilter
            if (Data.DeleteDuplicatesCard2 == true) {
                TotalFilterDeleteDuplicates = []
                for (i = 0; i < TotalFilter.length; i++) {
                    if (TotalFilterDeleteDuplicates.indexOf(TotalFilter[i].Card2) == -1) {
                        TotalFilterDeleteDuplicates.push(TotalFilter[i].Card2)
                    }
                }
            }


            if (TotalFilterDeleteDuplicates.length == 1) {
                if (TotalFilterDeleteDuplicates[0].Card1) {
                    $("#" + Data.ElementIdCard2).val(TotalFilterDeleteDuplicates[0].Card2)
                }
                else {
                    $("#" + Data.ElementIdCard2).val(TotalFilterDeleteDuplicates[0])
                }
                Card3Focus()
            } else {
                $("#" + Data.ElementIdCard2).focus()
            }
        } else {
            $("#" + Data.ElementIdCard2).focus()
        }
    }


    if (Data.Card2 == true) {
        var html = ""
        html += '<div id="PopUpWindow_' + Data.ElementIdCard2 + '" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.5);display:none;">'
        html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 450px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
        html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" onclick="$(this).parent().parent().hide()" >X</span>'
        html += '<div style="text-align:center">'
        html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 18px; -webkit-user-select: none; text-align: center; padding: 0;">בחר ' + Data.TitleCard2 + ':</div>'
        html += '<input id="PopUpWindowSearch_' + Data.ElementIdCard2 + '" style="-webkit-appearance: none; font-size: large; color: #3f475e; text-align: center; padding: 6px; border-color: #f7bb4d; border-style: solid; border-width: 0px 0px 2px 0px; margin: 5px 5px; background-color: #FFFFFB; -webkit-box-sizing: border-box;margin-top: -7px;display:none;" type="text" placeholder="חפש ' + Data.TitleCard2 + '" />'
        html += '<div id="CardFixedCount_' + Data.ElementIdCard2 + '" style="padding: 5px 0 13px;display:none">סה"כ תוצאות: <span></span></div>'
        html += '<table id="PopUpWindowTable_' + Data.ElementIdCard2 + '" style="text-align:center;width:95%;font-size:medium;background-color:white"></table>'
        html += '</div></div></div>'

        $('body').append(html)


        $("#" + Data.ElementIdCard2).focus(function () {
            if ($("#" + Data.ElementIdCard1).val() == "") {
                $("#" + Data.ElementIdCard1).focus()
            } else {
                $("#PopUpWindow_" + Data.ElementIdCard2).show()
                $("#" + Data.ElementIdCard2).blur()
                $('#PopUpWindowSearch_' + Data.ElementIdCard2).val('')
                if (Data.FocusCard2 == true) {
                    $('#PopUpWindowSearch_' + Data.ElementIdCard2).focus()
                }


                var ArrayDataParsCard2 = []
                for (i = 0; i < Data.ArrayData.length; i++) {
                    if (Data.DeleteDuplicatesCard2 == true) {
                        if (Data.ArrayData[i].Card1 == $("#" + Data.ElementIdCard1).val() && ArrayDataParsCard2.indexOf(Data.ArrayData[i].Card2) == -1) {
                            ArrayDataParsCard2.push(Data.ArrayData[i].Card2)
                        }
                    } else {
                        if (Data.ArrayData[i].Card1 == $("#" + Data.ElementIdCard1).val()) {
                            ArrayDataParsCard2.push(Data.ArrayData[i].Card2)
                        }
                    }
                }


                if (Data.SortCard2 == true) {
                    ArrayDataParsCard2.sort(function (a, b) {
                        if (a < b) return -1;
                        if (a > b) return 1;
                        return 0;
                    })
                }



                $('#PopUpWindowSearch_' + Data.ElementIdCard2).on('input', function () {
                    PopUpWindowSearchCard2()
                })

                if (Data.SearchCard2 == true) {
                    $('#PopUpWindowSearch_' + Data.ElementIdCard2).show()
                    $('#CardFixedCount_' + Data.ElementIdCard2).show()
                }


                function PopUpWindowSearchCard2() {
                    $('#PopUpWindowTable_' + Data.ElementIdCard2).html('')
                    var KeyWord = $('#PopUpWindowSearch_' + Data.ElementIdCard2).val().split(' ')
                    var Counter = 0
                    for (var i = 0; i < ArrayDataParsCard2.length; i++) {
                        var Exist = true
                        for (var j = 0; j < KeyWord.length; j++) {
                            if (ArrayDataParsCard2[i].indexOf(KeyWord[j]) < 0) { Exist = false }
                        }
                        if (ArrayDataParsCard2[i] == $('#PopUpWindowSearch_' + Data.ElementIdCard2).val()) { Exist = true }
                        if (Exist == true) {
                            Counter += 1
                            $('#PopUpWindowTable_' + Data.ElementIdCard2).append('<tr><td id="PopUpWindowBt_' + Data.ElementIdCard2 + i + '" style="user-select: none;cursor:pointer;font-weight:bold;width:80%;text-align:right"><div style="text-align:center;font-size: 20px;color: #2B3A63;">' + ArrayDataParsCard2[i] + '</div></td></tr>');
                            (function (i) {
                                $('#PopUpWindowBt_' + Data.ElementIdCard2 + i).click(function () {
                                    if ($("#" + Data.ElementIdCard2).val() != ArrayDataParsCard2[i]) {
                                        $("#" + Data.ElementIdCard2).val(ArrayDataParsCard2[i])
                                        if (Data.Card3 == true) {
                                            $("#" + Data.ElementIdCard3).val('');
                                        }
                                        if (Data.Card4 == true) {
                                            $("#" + Data.ElementIdCard4).val('');
                                        }
                                    }
                                    $("#PopUpWindow_" + Data.ElementIdCard2).hide()
                                    setTimeout(function () { ScrollUp($('#' + Data.ElementIdCard2)) }, 100);
                                    if (Data.Card3 == true) {
                                        if (Data.OpenCard3AfterSelectCard2 == true) {
                                            Card3Focus()
                                        }
                                    }
                                });
                            })(i);
                        };
                    }
                    $('#CardFixedCount_' + Data.ElementIdCard2 + ' span').html(Counter)
                }

                PopUpWindowSearchCard2()
            }
        });
    }


    //////////////////  Card3

    function Card3Focus() {
        if (Data.AutoFillOneResultCard3 == true) {
            var TotalFilter = Data.ArrayData.filter(function (elm) {
                return $("#" + Data.ElementIdCard1).val() == elm.Card1 && $("#" + Data.ElementIdCard2).val() == elm.Card2
            })

            var TotalFilterDeleteDuplicates = TotalFilter
            if (Data.DeleteDuplicatesCard3 == true) {
                TotalFilterDeleteDuplicates = []
                for (i = 0; i < TotalFilter.length; i++) {
                    if (TotalFilterDeleteDuplicates.indexOf(TotalFilter[i].Card3) == -1) {
                        TotalFilterDeleteDuplicates.push(TotalFilter[i].Card3)
                    }
                }
            }
            if (TotalFilterDeleteDuplicates.length == 1) {
                if (TotalFilterDeleteDuplicates[0].Card1) {
                    $("#" + Data.ElementIdCard3).val(TotalFilterDeleteDuplicates[0].Card3)
                }
                else {
                    $("#" + Data.ElementIdCard3).val(TotalFilterDeleteDuplicates[0])
                }
                Card4Focus()
            } else {
                $("#" + Data.ElementIdCard3).focus()
            }
        } else {
            $("#" + Data.ElementIdCard3).focus()
        }
    }


    if (Data.Card3 == true) {
        var html = ""
        html += '<div id="PopUpWindow_' + Data.ElementIdCard3 + '" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.5);display:none;">'
        html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 450px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
        html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" onclick="$(this).parent().parent().hide()" >X</span>'
        html += '<div style="text-align:center">'
        html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 18px; -webkit-user-select: none; text-align: center; padding: 0;">בחר ' + Data.TitleCard3 + ':</div>'
        html += '<input id="PopUpWindowSearch_' + Data.ElementIdCard3 + '" style="-webkit-appearance: none; font-size: large; color: #3f475e; text-align: center; padding: 6px; border-color: #f7bb4d; border-style: solid; border-width: 0px 0px 2px 0px; margin: 5px 5px; background-color: #FFFFFB; -webkit-box-sizing: border-box;margin-top: -7px;display:none;" type="text" placeholder="חפש ' + Data.TitleCard3 + '" />'
        html += '<div id="CardFixedCount_' + Data.ElementIdCard3 + '" style="padding: 5px 0 13px;display:none">סה"כ תוצאות: <span></span></div>'
        html += '<table id="PopUpWindowTable_' + Data.ElementIdCard3 + '" style="text-align:center;width:95%;font-size:medium;background-color:white"></table>'
        html += '</div></div></div>'

        $('body').append(html)


        $("#" + Data.ElementIdCard3).focus(function () {
            if ($("#" + Data.ElementIdCard1).val() == "") {
                $("#" + Data.ElementIdCard1).focus()
            } else if ($("#" + Data.ElementIdCard2).val() == "") {
                Card2Focus()
            } else {
                $("#PopUpWindow_" + Data.ElementIdCard3).show()
                $("#" + Data.ElementIdCard3).blur()
                $('#PopUpWindowSearch_' + Data.ElementIdCard3).val('')
                if (Data.FocusCard3 == true) {
                    $('#PopUpWindowSearch_' + Data.ElementIdCard3).focus()
                }


                var ArrayDataParsCard3 = []
                for (i = 0; i < Data.ArrayData.length; i++) {
                    if (Data.DeleteDuplicatesCard3 == true) {
                        if (Data.ArrayData[i].Card1 == $("#" + Data.ElementIdCard1).val() && Data.ArrayData[i].Card2 == $("#" + Data.ElementIdCard2).val() && ArrayDataParsCard3.indexOf(Data.ArrayData[i].Card3) == -1) {
                            ArrayDataParsCard3.push(Data.ArrayData[i].Card3)
                        }
                    } else {
                        if (Data.ArrayData[i].Card1 == $("#" + Data.ElementIdCard1).val() && Data.ArrayData[i].Card2 == $("#" + Data.ElementIdCard2).val()) {
                            ArrayDataParsCard3.push(Data.ArrayData[i].Card3)
                        }
                    }
                }

                if (Data.SortCard3 == true) {
                    ArrayDataParsCard3.sort(function (a, b) {
                        if (a < b) return -1;
                        if (a > b) return 1;
                        return 0;
                    })
                }



                $('#PopUpWindowSearch_' + Data.ElementIdCard3).on('input', function () {
                    PopUpWindowSearchCard3()
                })

                if (Data.SearchCard3 == true) {
                    $('#PopUpWindowSearch_' + Data.ElementIdCard3).show()
                    $('#CardFixedCount_' + Data.ElementIdCard3).show()
                }


                function PopUpWindowSearchCard3() {
                    $('#PopUpWindowTable_' + Data.ElementIdCard3).html('')
                    var KeyWord = $('#PopUpWindowSearch_' + Data.ElementIdCard3).val().split(' ')
                    var Counter = 0
                    for (var i = 0; i < ArrayDataParsCard3.length; i++) {
                        var Exist = true
                        for (var j = 0; j < KeyWord.length; j++) {
                            if (ArrayDataParsCard3[i].indexOf(KeyWord[j]) < 0) { Exist = false }
                        }
                        if (ArrayDataParsCard3[i] == $('#PopUpWindowSearch_' + Data.ElementIdCard3).val()) { Exist = true }
                        if (Exist == true) {
                            Counter += 1
                            $('#PopUpWindowTable_' + Data.ElementIdCard3).append('<tr><td id="PopUpWindowBt_' + Data.ElementIdCard3 + i + '" style="user-select: none;cursor:pointer;font-weight:bold;width:80%;text-align:right"><div style="text-align:center;font-size: 20px;color: #2B3A63;">' + ArrayDataParsCard3[i] + '</div></td></tr>');
                            (function (i) {
                                $('#PopUpWindowBt_' + Data.ElementIdCard3 + i).click(function () {
                                    if ($("#" + Data.ElementIdCard3).val() != ArrayDataParsCard3[i]) {
                                        $("#" + Data.ElementIdCard3).val(ArrayDataParsCard3[i])
                                        if (Data.Card4 == true) {
                                            $("#" + Data.ElementIdCard4).val('');
                                        }
                                    }
                                    $("#PopUpWindow_" + Data.ElementIdCard3).hide()
                                    setTimeout(function () { ScrollUp($('#' + Data.ElementIdCard3)) }, 100);
                                    if (Data.Card4 == true) {
                                        if (Data.OpenCard4AfterSelectCard3 == true) {
                                            Card4Focus()
                                        }
                                    }
                                });
                            })(i);
                        };
                    }
                    $('#CardFixedCount_' + Data.ElementIdCard3 + ' span').html(Counter)
                }

                PopUpWindowSearchCard3()
            }
        });
    }



    //////////////////  Card4

    function Card4Focus() {
        if (Data.AutoFillOneResultCard4 == true) {
            var TotalFilter = Data.ArrayData.filter(function (elm) {
                return $("#" + Data.ElementIdCard1).val() == elm.Card1 && $("#" + Data.ElementIdCard2).val() == elm.Card2 && $("#" + Data.ElementIdCard3).val() == elm.Card3
            })

            var TotalFilterDeleteDuplicates = TotalFilter
            if (Data.DeleteDuplicatesCard4 == true) {
                TotalFilterDeleteDuplicates = []
                for (i = 0; i < TotalFilter.length; i++) {
                    if (TotalFilterDeleteDuplicates.indexOf(TotalFilter[i].Card4) == -1) {
                        TotalFilterDeleteDuplicates.push(TotalFilter[i].Card4)
                    }
                }
            }

            if (TotalFilterDeleteDuplicates.length == 1) {
                if (TotalFilterDeleteDuplicates[0].Card1) {
                    $("#" + Data.ElementIdCard4).val(TotalFilterDeleteDuplicates[0].Card4)
                } else {
                    $("#" + Data.ElementIdCard4).val(TotalFilterDeleteDuplicates[0])
                }
            } else {
                $("#" + Data.ElementIdCard4).focus()
            }
        } else {
            $("#" + Data.ElementIdCard4).focus()
        }
    }


    if (Data.Card4 == true) {
        var html = ""
        html += '<div id="PopUpWindow_' + Data.ElementIdCard4 + '" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.5);display:none;">'
        html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 450px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
        html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" onclick="$(this).parent().parent().hide()" >X</span>'
        html += '<div style="text-align:center">'
        html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 18px; -webkit-user-select: none; text-align: center; padding: 0;">בחר ' + Data.TitleCard4 + ':</div>'
        html += '<input id="PopUpWindowSearch_' + Data.ElementIdCard4 + '" style="-webkit-appearance: none; font-size: large; color: #3f475e; text-align: center; padding: 6px; border-color: #f7bb4d; border-style: solid; border-width: 0px 0px 2px 0px; margin: 5px 5px; background-color: #FFFFFB; -webkit-box-sizing: border-box;margin-top: -7px;display:none;" type="text" placeholder="חפש ' + Data.TitleCard4 + '" />'
        html += '<div id="CardFixedCount_' + Data.ElementIdCard4 + '" style="padding: 5px 0 13px;display:none">סה"כ תוצאות: <span></span></div>'
        html += '<table id="PopUpWindowTable_' + Data.ElementIdCard4 + '" style="text-align:center;width:95%;font-size:medium;background-color:white"></table>'
        html += '</div></div></div>'

        $('body').append(html)


        $("#" + Data.ElementIdCard4).focus(function () {
            if ($("#" + Data.ElementIdCard1).val() == "") {
                $("#" + Data.ElementIdCard1).focus()
            } else if ($("#" + Data.ElementIdCard2).val() == "") {
                Card2Focus()
            } else if ($("#" + Data.ElementIdCard3).val() == "") {
                Card3Focus()
            } else {
                $("#PopUpWindow_" + Data.ElementIdCard4).show()
                $("#" + Data.ElementIdCard4).blur()
                $('#PopUpWindowSearch_' + Data.ElementIdCard4).val('')
                if (Data.FocusCard4 == true) {
                    $('#PopUpWindowSearch_' + Data.ElementIdCard4).focus()
                }


                var ArrayDataParsCard4 = []
                for (i = 0; i < Data.ArrayData.length; i++) {
                    if (Data.DeleteDuplicatesCard4 == true) {
                        if (Data.ArrayData[i].Card1 == $("#" + Data.ElementIdCard1).val() && Data.ArrayData[i].Card2 == $("#" + Data.ElementIdCard2).val() && Data.ArrayData[i].Card3 == $("#" + Data.ElementIdCard3).val() && ArrayDataParsCard4.indexOf(Data.ArrayData[i].Card4) == -1) {
                            ArrayDataParsCard4.push(Data.ArrayData[i].Card4)
                        }
                    } else {
                        if (Data.ArrayData[i].Card1 == $("#" + Data.ElementIdCard1).val() && Data.ArrayData[i].Card2 == $("#" + Data.ElementIdCard2).val() && Data.ArrayData[i].Card3 == $("#" + Data.ElementIdCard3).val()) {
                            ArrayDataParsCard4.push(Data.ArrayData[i].Card4)
                        }
                    }
                }

                if (Data.SortCard4 == true) {
                    ArrayDataParsCard4.sort(function (a, b) {
                        if (a < b) return -1;
                        if (a > b) return 1;
                        return 0;
                    })
                }



                $('#PopUpWindowSearch_' + Data.ElementIdCard4).on('input', function () {
                    PopUpWindowSearchCard4()
                })

                if (Data.SearchCard4 == true) {
                    $('#PopUpWindowSearch_' + Data.ElementIdCard4).show()
                    $('#CardFixedCount_' + Data.ElementIdCard4).show()
                }


                function PopUpWindowSearchCard4() {
                    $('#PopUpWindowTable_' + Data.ElementIdCard4).html('')
                    var KeyWord = $('#PopUpWindowSearch_' + Data.ElementIdCard4).val().split(' ')
                    var Counter = 0
                    for (var i = 0; i < ArrayDataParsCard4.length; i++) {
                        var Exist = true
                        for (var j = 0; j < KeyWord.length; j++) {
                            if (ArrayDataParsCard4[i].indexOf(KeyWord[j]) < 0) { Exist = false }
                        }
                        if (ArrayDataParsCard4[i] == $('#PopUpWindowSearch_' + Data.ElementIdCard4).val()) { Exist = true }
                        if (Exist == true) {
                            Counter += 1
                            $('#PopUpWindowTable_' + Data.ElementIdCard4).append('<tr><td id="PopUpWindowBt_' + Data.ElementIdCard4 + i + '" style="user-select: none;cursor:pointer;font-weight:bold;width:80%;text-align:right"><div style="text-align:center;font-size: 20px;color: #2B3A63;">' + ArrayDataParsCard4[i] + '</div></td></tr>');
                            (function (i) {
                                $('#PopUpWindowBt_' + Data.ElementIdCard4 + i).click(function () {
                                    $("#" + Data.ElementIdCard4).val(ArrayDataParsCard4[i])
                                    $("#PopUpWindow_" + Data.ElementIdCard4).hide()
                                    setTimeout(function () { ScrollUp($('#' + Data.ElementIdCard4)) }, 100);
                                });
                            })(i);
                        };
                    }
                    $('#CardFixedCount_' + Data.ElementIdCard4 + ' span').html(Counter)
                }

                PopUpWindowSearchCard4()
            }
        });
    }
}




var ShowCallbackIsOk = false
function ShowCallback() {
    if (ShowCallbackIsOk == false) {
        ShowCallbackIsOk = true

        var html = ""
        html += '<div id="Card_Callback" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.5);">'
        html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 500px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
        html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" onclick="$(this).parent().parent().hide()" >X</span>'
        html += '<div style="display: inline-block; font-family: Assistant, sans-serif; font-size: 22px; color: #ff6a00; font-weight: bold; width: 90%; margin-top: 27px; margin-bottom: 18px; -webkit-user-select: none; text-align: center; padding: 0;">יצירת Callback</div>'
        html += '<input oninput="getCallback()" type="text" id="Card_Callback_Url" placeholder="URL" style="font-size: 17px; padding: 5px 11px; width: 100%; box-sizing: border-box; border-radius: 6px; border: 1px solid #b3b3b3; display: block; transition: 0.2s; outline: none; margin: 10px auto;">'
        html += '<div style="border: 1px solid #cecece; border-radius: 7px; display: flex; flex-direction: column; grid-gap: 7px; padding: 9px 7px;">'
        html += '<div style="text-align: right; color: #2B3A63; font-weight: bold;"><label for="Card_Callback_AddFField_1" style="display: flex; align-items: center;"><input onchange="getCallback()" type="CheckBox" dir="rtl" id="Card_Callback_AddFField_1"><span>מספר מוסד</span></label></div>'
        html += '<div style="text-align: right; color: #2B3A63; font-weight: bold;"><label for="Card_Callback_AddFField_2" style="display: flex; align-items: center;"><input onchange="getCallback()" type="CheckBox" dir="rtl" id="Card_Callback_AddFField_2"><span>מספר טופס</span></label></div>'
        html += '<div style="text-align: right; color: #2B3A63; font-weight: bold;"><label for="Card_Callback_AddFField_3" style="display: flex; align-items: center;"><input onchange="getCallback()" type="CheckBox" dir="rtl" id="Card_Callback_AddFField_3"><span>מספר סידורי של הטופס שנוצר</span></label></div>'
        html += '<div style="text-align: right; color: #2B3A63; font-weight: bold;"><label for="Card_Callback_AddFField_4" style="display: flex; align-items: center;"><input onchange="getCallback()" type="CheckBox" dir="rtl" id="Card_Callback_AddFField_4"><span>מספר טופס</span></label></div>'
        html += '<div style="text-align: right; color: #2B3A63; font-weight: bold;"><label for="Card_Callback_AddFField_5" style="display: flex; align-items: center;"><input onchange="getCallback()" type="CheckBox" dir="rtl" id="Card_Callback_AddFField_5"><span>מספר עסקת אשראי / הו"ק</span></label></div>'
        html += '</div>'


        html += '<div style="font-size: 19px; font-weight: 900; direction: rtl; background: #607d8b; border-radius: 5px 5px 0 0; margin: 10px 0 0; text-align: center; padding: 3px; color: white;">Json</div>'
        html += '<textarea id="CallbackJson" style="direction: ltr;font-size: 17px; padding: 10px 15px; width: 100%; box-sizing: border-box; margin: auto; height: 350px; resize: none; border: 1px solid #b3b3b3; display: block; outline: none; border-radius: 0 0 5px 5px; border-top: 0;"></textarea>'
        html += '<div style="font-size: 19px; font-weight: 900; direction: rtl; background: #607d8b; border-radius: 5px 5px 0 0; margin: 10px 0 0; text-align: center; padding: 3px; color: white;">Form</div>'
        html += '<textarea id="Callbackform" style="direction: ltr;font-size: 17px; padding: 10px 15px; width: 100%; box-sizing: border-box; margin: auto; height: 350px; resize: none; border: 1px solid #b3b3b3; display: block; outline: none; border-radius: 0 0 5px 5px; border-top: 0;"></textarea>'

        html += '</div></div>'

        $('body').append(html)

        getCallback()
    } else {
        $("#Card_Callback").show();
    }
}



function getCallback() {
    var link = $('#Card_Callback_Url').val()
    var textCallback = ""
    textCallback = link + ';Json;{'

    if ($("#Card_Callback_AddFField_1").is(':checked') == true) { textCallback += '"MosadId":"[MosadId]",' }
    if ($("#Card_Callback_AddFField_2").is(':checked') == true) { textCallback += '"TofesId":"[TofesId]",' }
    if ($("#Card_Callback_AddFField_3").is(':checked') == true) { textCallback += '"IdFormsSend":"[Id]",' }
    if ($("#Card_Callback_AddFField_4").is(':checked') == true) { textCallback += '"Emda":"[MasofId]",' }
    if ($("#Card_Callback_AddFField_5").is(':checked') == true) { textCallback += '"TransactionId":"[TransactionId]",' }

    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element]
        if (JsonElement.DbName) {
            textCallback += '"' + JsonElement.ElementId + '":"[' + JsonElement.DbName + ']",'
        }
    }
    textCallback = textCallback.substring(0, textCallback.length - 1)
    textCallback = textCallback + '}'
    $('#CallbackJson').val(textCallback)


    textCallback = link + ';form;'

    if ($("#Card_Callback_AddFField_1").is(':checked') == true) { textCallback += 'MosadId=[MosadId]&' }
    if ($("#Card_Callback_AddFField_2").is(':checked') == true) { textCallback += 'TofesId=[TofesId]&' }
    if ($("#Card_Callback_AddFField_3").is(':checked') == true) { textCallback += 'IdFormsSend=[Id]&' }
    if ($("#Card_Callback_AddFField_4").is(':checked') == true) { textCallback += 'Emda=[MasofId]&' }
    if ($("#Card_Callback_AddFField_5").is(':checked') == true) { textCallback += 'TransactionId=[TransactionId]&' }

    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element]
        if (JsonElement.DbName) {
            textCallback += JsonElement.ElementId + '=[' + JsonElement.DbName + ']&'
        }
    }
    textCallback = textCallback.substring(0, textCallback.length - 1)
    $('#Callbackform').val(textCallback)
}



function ShowDbName() {

    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element];
        if (JsonElement.DbName == undefined) { continue; }
        $("#" + JsonElement.ElementId).attr("Db_Name", JsonElement.DbName)
        $("#" + JsonElement.ElementId + "Div").attr("Db_Name", JsonElement.DbName)
        //$("#" + JsonElement.ElementId).addClass( JsonElement.DbName)
    }

    OpenHelpMenu()

}

function Test1530() {
    Json.MosadId = "7008068";
    Json.TofesId = "1530";
    Json.Version = "";

    $("#MainLogo").attr('src', 'https://images.matara.pro/ClientsImages/' + Json.MosadId + '.jpg?1');
    $("#MainLogo").after("<div style='color: #1c6094; font-size: 20px; font-weight: bold;'>1530</div>")

}

function Test770() {
    Json.MosadId = "7008068";
    Json.TofesId = "770";
    Json.Version = "";
    $("#MainLogo").attr('src', 'https://images.matara.pro/ClientsImages/' + Json.MosadId + '.jpg?1');
    $("#MainLogo").after("<div style='color: #1c6094; font-size: 20px; font-weight: bold;'>770</div>")
}



function Test2560() {
    Json.MosadId = "0";
    Json.TofesId = "2560";
    Json.Version = "";
    $("#MainLogo").attr('src', 'https://images.matara.pro/ClientsImages/' + Json.MosadId + '.jpg?1');
    $("#MainLogo").after("<div style='color: #1c6094; font-size: 20px; font-weight: bold;'>2560</div>")
}



function Test899() {
    Json.MosadId = "0";
    Json.TofesId = "899";
    Json.Version = "";
    $("#MainLogo").attr('src', 'https://images.matara.pro/ClientsImages/' + Json.MosadId + '.jpg?1');
    $("#MainLogo").after("<div style='color: #1c6094; font-size: 20px; font-weight: bold;'>899</div>")
}




function Fill() {
    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element];
        if (JsonElement.ElementId == undefined) { continue; }
        if (JsonElement.Type == "Radio") {
            $("#" + JsonElement.ElementId + "_Radio0").prop('checked', 'checked');
        }
        else if (JsonElement.Type == "CheckBox") {
            $("#" + JsonElement.ElementId).prop('checked', 'checked');
        }
        else if (JsonElement.Type == "Select") {
            $("#" + JsonElement.ElementId).prop("selectedIndex", 0);
        }
        else if (JsonElement.Type == "Text") {
            if (JsonElement.Date == true || JsonElement.ElementId.indexOf("BDE") > -1) {
                $("#" + JsonElement.ElementId).val("10/10/2020")
            }
            else if (JsonElement.ElementId.indexOf("Mail") > -1) {
                $("#" + JsonElement.ElementId).val("a410000@gmail.com")
            }
            else {
                $("#" + JsonElement.ElementId).val("בדיקה")
            }
        } else if (JsonElement.Type == "Tel") {
            if (JsonElement.Date == true || JsonElement.ElementId.indexOf("BDE") > -1) {
                $("#" + JsonElement.ElementId).val("10/10/2020")
            }
            else if (JsonElement.Phone == true || JsonElement.ElementId.indexOf("Tel") > -1) {
                $("#" + JsonElement.ElementId).val("0528969696")
            }
            else if (JsonElement.ElementId.indexOf("Zeout") > -1) {
                $("#" + JsonElement.ElementId).val("203187380")
            }
            else if (JsonElement.ElementId.indexOf("Bank") > -1) {
                $("#" + JsonElement.ElementId).val("52")
            }
            else if (JsonElement.ElementId.indexOf("Snif") > -1) {
                $("#" + JsonElement.ElementId).val("188")
            }
            else if (JsonElement.ElementId.indexOf("Account") > -1) {
                $("#" + JsonElement.ElementId).val("366145")
            }
            else {
                $("#" + JsonElement.ElementId).val("123")
            }

        }
    }
}



function SetDbName() {
    var Field = 1;
    var FieldMax = 1;
    for (var Element in Json.FormElements) {
        var JsonElement = Json.FormElements[Element];
        if (JsonElement.DbName == undefined) { continue; }

        if (+JsonElement.MaxLength > 50) {
            JsonElement.DbName = "Field" + FieldMax + "Max";
            FieldMax++
        } else {
            JsonElement.DbName = "Field" + Field;
            Field++
        }
    }
    console.log(Json)
}




function AppendBtOpenCreditCardList() {
    if (typeof Json == "undefined") return false;
    if (Json.TofesId == "1016" || Json.TofesId == "3195") return false;

    if ($("#CreditCard").html() == undefined) return false;
    if ($("#CardExpiration").html() == undefined) return false;

    if (typeof ClientJs_Detector == "undefined") { LoadScript("/NedarimPlus/Client/Client.js?0"); return false; };
    if (typeof ClientFormJs_Detector == "undefined") { LoadScript("Files/ClientForm.js?0"); return false; };
    LoadClientCss()

    var CC_List_BtS_Display = "inline-block";

    if (typeof Json !== undefined) {
        if ($("#CVV").html() !== undefined && Json.SpecialCheck.indexOf("CreditCardToken") !== -1) {
            CC_List_BtS_Display = "none";
        }
    }

    if ($("#CreditCardDiv_absolute").html() == undefined) {

        $('#CreditCardDiv').append(
            '<div id="CreditCardDiv_absolute" style="font-family: \'Assistant\';height: 39px; position: absolute; top: 19px; width: 100%; margin: 5px; background: white; text-align: right; font-size: large; color: rgb(63, 71, 94); padding: 0px 5px; border-bottom: 2px solid rgb(247, 187, 77); box-sizing: border-box; cursor: pointer; direction: ltr; padding-top: 10px;display: none;"></div><div id="CreditCardList_BtS" style="display: inline-block;"><span id="CreditCardList_BtOpen_Open" style="display: ' + CC_List_BtS_Display + ';padding: 2px 10px;background-color: aliceblue;border-radius: 5px;font-family: Assistant;margin-right: 5px;color: rgb(86,130,171);border: 1px solid darkgrey;font-size: 15px;cursor: pointer;user-select: none;padding: 5px 12px;" onclick="OpenCreditCardList()">הצג כרטיסים שמורים</span><span id="CreditCardList_BtOpen_Reset" style="display:inline-block;padding: 2px 10px;background-color: aliceblue;border-radius: 5px;font-family: Assistant;margin-right: 5px;border: 1px solid darkgrey;font-size: 15px;cursor: pointer;user-select: none;color: white;background-color: indianred;padding: 5px 12px;" onclick="CreditCardList_ResetValue()">ביטול שימוש בכרטיס שמור</span></div>'
        )

        AddClientHtml()
    }

    $("#CreditCardList_BtOpen_Reset").hide()
}

function LoadScript(Path, TryCounter) {
    try {
        console.log('Loading ' + Path)
        if (TryCounter == undefined) TryCounter = 0;
        var script = document.createElement('script');
        var prior = document.getElementsByTagName('script')[0];
        //פה ניתן להציג משהו שמראה שיש טעינה של קובץ    
        script.async = 0;
        script.onload = script.onreadystatechange = function (_, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                script.onload = script.onreadystatechange = null;
                script = undefined;
                if (!isAbort) {
                    setTimeout(
                        function () {
                            if (typeof ClientJs_Detector == "undefined") {
                                if (TryCounter > 2) { console.log('שגיאה במשיכת JS לקוח. ייתכן וחלק מהמערכות של הטופס לא יעבדו בצורה תקינה'); return false; }
                                TryCounter += 1
                                LoadScript(Path, TryCounter);
                            } else {
                                console.log('Loading ClientJs - Done')
                                AppendBtOpenCreditCardList()
                            }
                        }
                        , 0);
                }

            }
        };
        script.onerror = function () {
            if (TryCounter > 2) { console.log('שגיאה במשיכת JS לקוח. ייתכן וחלק מהמערכות של הטופס לא יעבדו בצורה תקינה'); return false; }
            TryCounter += 1
            LoadScript(Path, TryCounter);
        }
        script.src = Path
        prior.parentNode.insertBefore(script, prior);
    } catch (err) {
        console.log('שגיאה במשיכת JS לקוח. ייתכן וחלק מהמערכות של הטופס לא יעבדו בצורה תקינה'); return false;
    }
}
function LoadClientCss() {
    var lnk = document.createElement('link');
    lnk.href = '/NedarimPlus/Client/Client.css';
    lnk.rel = 'stylesheet';
    lnk.type = 'text/css';
    (document.head || document.documentElement).appendChild(lnk);
}


function OpenCreditCardList() {
    if (IsSameOrigin()) {
        if (ClientJson == undefined) ClientJson = parent.ClientJson
    }

    if (ClientJson == undefined) {
        OpenLogIn('', false, function () { ClientId = ClientJson.ID; Zeout = ClientJson.Zeout; OpenCreditCardList(); })
        return false;
    }

    if (CreditCards[0] == undefined) {
        $("#CreditCardList_BtOpen_Open").html("<img style='width: 150px;' src='https://www.matara.pro/nedarimplus/online/Files/wait.gif' alt='נא להמתין'/>").css('pointer-events', 'none')
        $.ajax({
            url: "/nedarimplus/V6/Files/WebServices/GetClientData.aspx?Action=GetCreditCards",
            type: "POST",
            data: "SessionId=" + encodeURIComponent(ClientJson.SessionId) + "&SessionPass=" + encodeURIComponent(ClientJson.SessionPass) + "&ClientId=" + encodeURIComponent(ClientJson.ID),
            context: Text,
            timeout: 10000,
        }).success(function (Json) {
            if (Json.Result == "Error") {
                MySwal("לא ניתן למשוך כרטיסים שמורים. נא לרענן את הטופס כדי לייבא את הכרטיסים מחדש", "");
                $("#CreditCardList_BtS").hide();
                return false;
            }
            CreditCards = Json

            $('body').append('<div id="CreditCardList_CardList" style="font-family: \'Assistant\';position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.5);">\
                        <div id="CreditCardList_CardList_Box" style="padding: 20px; border: 1px solid #888; color: #808080; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; border-radius: 20px; width: 95%; max-width: 398px; box-sizing: border-box; margin: 20px auto;">\
                        <div style="-webkit-user-select:none; float:right; width:40px; line-height: 40px; text-align: center; border-radius: 10px; background-color: salmon; color: white; font-size: large; font-weight: bold; cursor: pointer; margin: -10px; position: absolute;" onclick="$(this).parent().parent().hide()">X</div>\
                        <div style="text-align: center; padding: 14px;"><img src="https://www.matara.pro/nedarimplus/online/Files/CreditCardBt.png" style="height: 35px"><br>כרטיסי האשראי שלי</div></div></div>')


            for (var i = 0; i < CreditCards.length; i++) {
                (function (i) {
                    $("#CreditCardList_CardList_Box").append('<div id="CreditCards_Bt_' + CreditCards[i].CardID + '" style="cursor: pointer;border:2px solid #eee;border-radius:5px;padding:10px;text-align:right;position:relative;margin:5px auto;-webkit-user-select:none"><img style="width: 42px; vertical-align: top; margin-top: 5px;" src="https://www.matara.pro/nedarimplus/online/Files/CreditCardBt.png"><div style="display:inline-block;margin-right:15px"><div dir="ltr" style="font-weight:bold">' + CreditCards[i].CardNumber + '</div><div>תוקף: ' + CreditCards[i].Tokef + '</div><div>כינוי: <span style="font-weight:600">' + CreditCards[i].NickName + '</span></div></div></div></div>')

                    $('#CreditCards_Bt_' + CreditCards[i].CardID).unbind().bind('click', function () {

                        $("#CreditCard").val(ClientJson.SessionId + "|" + ClientJson.SessionPass + "|" + CreditCards[i].CardID + "|" + CreditCards[i].CardHash)
                        $("#CardExpiration").val(CreditCards[i].Tokef.replace("/", "")).attr('disabled', 'disabled')
                        if ($("#CVV").html() != undefined) $("#CVV").val("***").attr('disabled', 'disabled')
                        $("#CreditCardList_BtOpen_Open").hide()
                        $("#CreditCardList_BtOpen_Reset").show()

                        $("#CreditCardList_CardList").hide();
                        $("#SwipeCardBt").hide();


                        $("#CreditCardDiv_absolute").html(CreditCards[i].CardNumber).show().bind('click', function () {
                            $("#CreditCardList_CardList").show()
                        }).css('cursor', 'pointer')
                        $('#CreditCardDiv').css("position", "relative")

                        ScrollUp("#CreditCardDiv")


                        ChangeType("Text")


                        if (window["OpenCreditCardListSelect"]) window["OpenCreditCardListSelect"]()
                    });
                })(i);
            }

            if (CreditCards.length == 0) {
                $("#CreditCardList_CardList_Box").append('<div style="text-align: center; color: indianred; font-size: 18px; font-weight: 600;">אין לך כרטיסים שמורים</div>')
            }

            $("#CreditCardList_CardList_Box").append('<div style="font-size: 15px; text-align: center; border-top: 1px solid #d3d3d3; margin-top: 11px; padding-top: 7px;">כדי לערוך / למחוק / להוסיף כרטיס אשראי, ניתן לעשות זאת באיזור האישי בנדרים פלוס</div>')

        }).error(function () {
            MySwal("תקלת תקשורת | נסה שוב", "");
        }).complete(function () {
            $("#CreditCardList_BtOpen_Open").html("הצג כרטיסים שמורים").css('pointer-events', 'auto')
        });
        return false;
    }

    $("#CreditCardList_CardList").show()
}


function CreditCardList_ResetValue() {
    $("#CreditCardList_BtOpen_Reset").hide()
    $("#CreditCardList_BtOpen_Open").show()
    $("#SwipeCardBt").show()


    $("#CreditCard").val("")
    $("#CardExpiration").val("").attr('disabled', false)
    if ($("#CVV").html() != undefined) $("#CVV").val("").attr('disabled', false)


    $("#CreditCardDiv_absolute").html("").hide().unbind().bind('click', function () {
    }).css('cursor', 'auto')
    $('#CreditCardDiv').css("position", "static")

    ChangeType("Tel")

    if (window["OpenCreditCardListCancel"]) window["OpenCreditCardListCancel"]()
}


function ChangeType(Type) {
    for (var ElementsIndex = 0; ElementsIndex < Json.FormElements.length; ElementsIndex++) {
        if (Json.FormElements[ElementsIndex] == undefined) continue;
        if (Json.FormElements[ElementsIndex].ElementId == undefined) continue;

        if (Json.FormElements[ElementsIndex].ElementId == "CreditCard" || Json.FormElements[ElementsIndex].ElementId == "CVV") {
            Json.FormElements[ElementsIndex].Type = Type
        }
    }
}

function IsSameOrigin() {
    var sameOrigin;
    try { sameOrigin = window.parent.location.host == window.location.host; }
    catch (e) { sameOrigin = false; }
    return sameOrigin;
}





//CreationBitCard({
//     MosadId: Json.MosadId,
//     ClientName: Bit_ClientName,
//     Street: "",
//     City: "",
//     Mail: $("#Mail").val(),
//     Phone: $("#TelBit").val(),
//     Amount: $("#TashlumAmount").val(),
//     Tashlumim: "1",
//     Groupe: "טופס תשלום - ביט",
//     Comment: $('input[name=Type]:checked').val() + Type_Description,
//     Zeout: "",
//     Currency: "1",
//     CaptchaResponse: ""
//   },
//    function () {
//    console.log("SendTrue")
//   }
//)


// חלון יצירת תשלום בביט
function CreationBitCard(PostData, functionAfterSend) {
    if (PostData === "Like_The_Last_Time") {
        PostData = window.DataCreateTransactionBit
    }
    window.DataCreateTransactionBit = PostData
    var CheckCount = 0;
    window.CheckTransactionInterval_Bit;
    clearInterval(window.CheckTransactionInterval_Bit)

    var PreTransactionId;
    window.QR_Url = undefined
    window.AjaxCreateTransaction = undefined;


    //if (GetURLParameter("MasofId") == '') { window.onbeforeunload = function () { return "" } }

    if ($("#PopUpWindow_Bit").html() != undefined) { $("#PopUpWindow_Bit").remove(); }


    if ($("#WaitCreateTransaction_Bit").html() == undefined) {

        var html = '<div id="WaitCreateTransaction_Bit" style="position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.4);">'
        html += '<div dir="rtl" style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 320px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;"><img src="Files/Pic/LogoGlobalBit.png" style="border-radius:5px;width: 100px;" alt="לוגו ביט">'
        html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" id="WaitCreateTransaction_Bit_Close" >X</span>'
        html += '<div style="padding: 13px 2px 7px;">המתן לפתיחת חלון עסקה - ביט</div>'
        html += '<img src="Files/Pic/Wait_Bit.gif" alt="נא להמתין" style="width:50px;height: 44px;" />'
        html += '</div>'
        html += '</div>'

        html += "<style>*{font-family: 'Assistant';}</style>"
        $('body').append(html)

        $("#WaitCreateTransaction_Bit_Close").click(function () {
            clearInterval(window.CheckTransactionInterval_Bit)
            window.AjaxCreateTransaction.abort()
            $("#PopUpWindow_Bit").remove();
            $("#WaitDiv").hide();
            $("#SaveBitDiv").show();
            //if (GetURLParameter("MasofId") == '') { window.onbeforeunload = function () { } }
            $("#WaitCreateTransaction_Bit").hide();
        })

    } else {
        $("#WaitCreateTransaction_Bit").show();
    }



    window.AjaxCreateTransaction = $.ajax({
        url: "/nedarimplus/v6/Files/WebServices/DebitBit.aspx?Action=CreateTransaction",
        context: Text,
        timeout: 60000,
        type: "POST",
        data: "MosadId=" + encodeURIComponent(PostData.MosadId)
            + "&ClientName=" + encodeURIComponent(PostData.ClientName)
            + "&Street=" + encodeURIComponent(PostData.Street)
            + "&City=" + encodeURIComponent(PostData.City)
            + "&Mail=" + encodeURIComponent(PostData.Mail)
            + "&Phone=" + encodeURIComponent(PostData.Phone)
            + "&Amount=" + encodeURIComponent(PostData.Amount)
            + "&Tashlumim=" + encodeURIComponent(PostData.Tashlumim)
            + "&Groupe=" + encodeURIComponent(PostData.Groupe)
            + "&Comment=" + encodeURIComponent(PostData.Comment)
            + "&Zeout=" + encodeURIComponent(PostData.Zeout)
            + "&Currency=" + encodeURIComponent(PostData.Currency)
            + "&CaptchaResponse=" + encodeURIComponent(PostData.CaptchaResponse)
    }).success(function (Response) {

        if (Response.Status == 'Error') {
            //if (GetURLParameter("MasofId") == '') { window.onbeforeunload = function () { } }
            EAlertConfirm("שגיאה", Response.Message)

            $("#WaitDiv").hide();
            $("#SaveBitDiv").show();

        } else {
            var html = ''
            html += '<div id="PopUpWindow_Bit" style="backdrop-filter: blur(5px);position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; padding: 14px 0; background-color: rgba(0, 0, 0, 0.4);">'
            html += '<div style="margin: 5px auto 20px; padding: 20px; border: 1px solid #888; width: 80%; color: #808080; font-family: Assistant, sans-serif; -webkit-box-shadow: 0px 0px 30px 0px rgb(50 50 50 / 75%); background-color: white; max-width: 320px; min-width: 200px; position: relative; border-radius: 20px; text-align: center;">'
            html += '<span style="cursor: pointer; position: absolute; background: indianred; padding: 6px 15px; color: white; font-weight: 600; font-size: 22px; border-radius: 7px 15px; top: 5px; right: 5px;" id="PopUpWindow_Bit_Close" >X</span>'

            html += '<div dir="rtl" style="user-select: none;background-color: #f1f1f1; padding: 20px; border-radius: 5px; font-weight: 500; font-size: 19px; max-width: 300px; margin: auto; text-align: center; color: #797777; line-height: normal;"><img src="Files/Pic/LogoGlobalBit.png" style="border-radius:5px;width: 100px;" alt="לוגו ביט">'
            html += '<div style="border: 1px solid #e2e2e287; margin: 12px 0;"></div>'
            html += '<div id="BitData">'

            html += '<div style="font-size: 16px;" id="BitText1">העסקה הוקמה בהצלחה. <br/> קישור למעבר לאפליקציית ביט נשלח אליכם כעת בהודעת SMS <br/><br/>לא קבלתם SMS? סירקו את הקוד</div>'
            html += '<div id="BitQRCode" style="border-radius: 12px; padding: 7px; width: 150px; margin: auto; height: 150px;"></div>'

            html += '<div style="border: 1px solid #e2e2e287; margin: 12px 0;"></div>'
            html += ''
            html += '<div>'
            html += '<img id="WaitGif" src="Files/Pic/Wait_Bit.gif" alt="נא להמתין" style="width:50px;height: 44px;" />'
            html += '<div id="Error_CheckTransaction" style="color: indianred; font-weight: bolder;font-size: 16px;"></div>'
            html += '<div id="Bt_CheckTransaction" style="cursor: pointer;margin: 12px 0px; background: #f59e42; color: white; padding: 3px 0px; border-radius: 5px;  display: none; font-size: 14px;">לחצו כאן לאחר סיום ביצוע התשלום באפליקציית ביט</div>'
            html += '</div>'
            html += ''
            html += '<div id="BitText2" style="font-size: 16px; color: #2993c1; font-weight: 700;">'
            html += '<span id="BitText2_ColorBlue">נא להשאיר דף זה פתוח.<br/> תועברו אוטומטית לשלב הבא לאחר סיום העסקה באפליקציית ביט </span>'
            html += '<div style="border: 1px solid #e2e2e287; margin: 14px 0;"></div>'
            html += '<span style="font-weight: 600; color: #d78686; font-size: 15px;">לא קבלתם SMS? הקישור נכשל? <br/>ניתן ללחוץ <u onclick="CreationBitCard(\'Like_The_Last_Time\');" style=" cursor: pointer;">כאן</u> ליצירת עסקה חדשה</span></div>'
            html += '</div>'
            html += '</div>'

            html += '<div style="text-align:center">'
            html += '</div></div></div>'

            $('body').append(html)

            PreTransactionId = Response.PreTransactionId

            $("#PopUpWindow_Bit_Close").click(function () {
                clearInterval(window.CheckTransactionInterval_Bit)
                $("#PopUpWindow_Bit").remove();
                $("#WaitDiv").hide();
                $("#SaveBitDiv").show();
                //if (GetURLParameter("MasofId") == '') { window.onbeforeunload = function () { } }
            })


            $("#Bt_CheckTransaction").click(function () {
                CheckTransaction()
            })


            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && GetURLParameter("MasofId") == "") {
                $("#BitQRCode").hide();
                $("#BitText1").html("העסקה הוקמה בהצלחה, הנך מועבר לאפליקציה");

                setTimeout(function () {
                    document.location.href = Response.Message;
                }, 250);

            } else {
                try {
                    QR_Url = Response.Message;
                    var s = document.createElement("script");
                    s.setAttribute("src", "../Online/Files/qrcode.js");
                    document.body.appendChild(s);

                } catch (err) {
                    console.log(err)
                    $("#BitQRCode").hide();
                }

            }

            window.CheckTransactionInterval_Bit = setInterval(function () { CheckTransaction() }, 1000 * 6)
        }
    }).error(function (err) {
        if (err.statusText == "abort") return false;
        EAlertConfirm("שגיאה", "תקלת תקשורת, נסה שוב")
        //if (GetURLParameter("MasofId") == '') { window.onbeforeunload = function () { } }
    }).complete(function () {
        $("#WaitCreateTransaction_Bit").hide();
    });


    function CheckTransaction() {
        CheckCount++;
        $("#WaitGif").css("display", "inline-block");
        $("#Bt_CheckTransaction").hide();
        $("#Error_CheckTransaction").html("");

        $.ajax({
            url: "/nedarimplus/v6/Files/WebServices/DebitBit.aspx?Action=CheckTransaction&MosadId=" + encodeURIComponent(PostData.MosadId) + "&TransactionId=" + PreTransactionId,
            context: Text,
            timeout: 60000,
        }).success(function (JsonData) {

            if (JsonData.Status == "Error" && JsonData.Message == "העסקה לא אושרה") {
                clearInterval(window.CheckTransactionInterval_Bit)
                $("#BitData").html('<span style="font-weight: 600; color: #d78686; font-size: 15px;">פג תוקף העסקה <br/>ניתן ללחוץ <u onclick="CreationBitCard(\'Like_The_Last_Time\');" style=" cursor: pointer;">כאן</u> ליצירת עסקה חדשה</span>')
                //if (GetURLParameter("MasofId") == '') { window.onbeforeunload = function () { } }
            }

            if (JsonData.Status == "OK") {
                //if (GetURLParameter("MasofId") == '') { window.onbeforeunload = function () { } }
                clearInterval(window.CheckTransactionInterval_Bit)
                $("#PopUpWindow_Bit").remove();

                if (functionAfterSend == undefined) {
                    var BtTex = 'חזרה לנדרים פלוס'
                    if (GetURLParameter("MasofId") == '') BtTex = 'אישור'

                    swal({
                        title: "הטופס נשלח בהצלחה",
                        type: "success",
                        showCancelButton: false,
                        confirmButtonText: BtTex,
                        closeOnConfirm: true,
                        allowOutsideClick: false,
                    }, function (isConfirm) {
                        if (GetURLParameter("MasofId") !== '') { parent.GoToMenu("Tafrit"); parent.closeIFrame() } else { $('html, body').scrollTop(0); location.reload(); }
                    });
                } else {
                    functionAfterSend()
                }

                return false;
            }

            if (CheckCount >= 20) {
                setTimeout(function () {
                    $("#WaitGif").hide();
                    $("#Bt_CheckTransaction").show();
                    $("#Error_CheckTransaction").html(JsonData.Message);
                }, 2 * 1000)

                clearInterval(window.CheckTransactionInterval_Bit)
                window.CheckTransactionInterval_Bit = setInterval(function () { CheckTransaction(); }, 1000 * 60)
            }

        }).error(function () {
            //if (GetURLParameter("MasofId") == '') { window.onbeforeunload = function () { } }
            clearInterval(window.CheckTransactionInterval_Bit)
            $("#WaitGif").hide();
            $("#Bt_CheckTransaction").show();
            $("#Error_CheckTransaction").html("תקלת תקשורת, שפר קליטה ונסה שוב");
        });
    }
}




function GetNumHigh(Num1, Num2) {
    Num1 = +Num1
    Num2 = +Num2

    var Total_Num1 = (Num1 < 0 ? 0 : Num1)
    var Total_Num2 = (Num2 < 0 ? 0 : Num2)
    var Total_Double = 0

    if ((Num1 < Num2) && Num2 > 0 && Num1 > 0) {
        Total_Double = Num1
        Total_Num2 = Num2 - Total_Double
        Total_Num1 = 0
    }

    if ((Num1 > Num2) && Num2 > 0 && Num1 > 0) {
        Total_Double = Num2
        Total_Num1 = Num1 - Total_Double
        Total_Num2 = 0
    }

    if ((Num1 == Num2) && Num2 > 0 && Num1 > 0) {
        Total_Double = Num1
        Total_Num1 = 0
        Total_Num2 = 0
    }

    return [+Total_Num1, +Total_Num2, +Total_Double]
}
