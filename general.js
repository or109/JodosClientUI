function $$(id) {
    if (typeof (id) == "string") {
        return document.getElementById(id);
    }
    return id;
}

function Mid(str, start, len) {
    // Make sure start and len are within proper bounds
    if (start < 0 || len < 0) return "";
    var iEnd, iLen = String(str).length;
    if (start + len > iLen)
        iEnd = iLen;
    else
        iEnd = start + len;
    return String(str).substring(start, iEnd);
}
function ismaxlength(obj, num) {
    if (obj.value.length > num) {
        obj.value = cutString(obj, num);
    }
}

function cutString(obj, num) {
    var msg = Mid(obj.value, 0, num);
    return msg;
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;
    return re.test(phone);
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getQueryString() {
    var result = {}, queryString = location.search.substring(1),
      re = /([^&=]+)=([^&]*)/g, m;

    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    return result;
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function close_window() {
    if (confirm("לסגור את החלון?")) {
        window.open('', '_self', '');
        window.close();
    }
}

function countNumber(num, minVal, maxVal)
{    
    if (num == '') { num = 0; }
    if (!isNaN(num)) {
        if (minVal != null) {
            if (num < minVal) return 0;
        }
        if (maxVal != null) {
            if (num > maxVal) return 0;
        }
        return parseInt(num);
    }
    return 0;
}

function getNumDif(oldVal, newVal, minVal, maxVal) {
    var dif;
    if (newVal == '' || isNaN(newVal)) { countNumber(newVal, minVal, maxVal); }
    if (oldVal == '' || isNaN(oldVal)) { countNumber(oldVal, minVal, maxVal); }
    dif = parseInt(newVal) - parseInt(oldVal);
    return dif;
}

/*
    ajax JS
*/
function loadpageb(page_request) {
    if ((page_request.readyState == 4) && (page_request.status == 200 || window.location.href.indexOf("http") == -1)) {
        eval(page_request.responseText);
    }
}

function loadpagec(page_request) {
    if (page_request.readyState == 4 && (page_request.status == 200 || window.location.href.indexOf("http") == -1))
        return (page_request.responseText);
}

function loadpage(page_request, containerid) {
    if (page_request.readyState == 4 && (page_request.status == 200 || window.location.href.indexOf("http") == -1))
        document.getElementById(containerid).innerHTML = page_request.responseText
}

function ajaxpage(url, containerid) {
    var page_request = false
    if (window.XMLHttpRequest) // if Mozilla, Safari etc
        page_request = new XMLHttpRequest()
    else if (window.ActiveXObject) { // if IE
        try {
            page_request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch (e) {
            try {
                page_request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e) { }
        }
    } else
        return false
    page_request.onreadystatechange = function () {
        loadpage(page_request, containerid)

    }
    if (url.indexOf("?") == -1) {
        page_request.open('GET', url + '?dd=' + new Date().getTime(), true);
        //alert(url);
    } else {
        page_request.open('GET', url + '&dd=' + new Date().getTime(), true);
    }
    page_request.send(null)
}

function ajaxpageb(url) {
    var page_request = false
    if (window.XMLHttpRequest) // if Mozilla, Safari etc
        page_request = new XMLHttpRequest()
    else if (window.ActiveXObject) { // if IE
        try {
            page_request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch (e) {
            try {
                page_request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e) { }
        }
    }
    else
        return false
    page_request.onreadystatechange = function () {
        loadpageb(page_request)
    }
    if (url.indexOf("?") == -1) {
        page_request.open('GET', url + '?dd=' + new Date().getTime());
    } else {
        page_request.open('GET', url + '&dd=' + new Date().getTime());
    }
    page_request.send(null)
}

function ajaxpagebPOST(url) {
    var page_request = false
    if (window.XMLHttpRequest) // if Mozilla, Safari etc
        page_request = new XMLHttpRequest()
    else if (window.ActiveXObject) { // if IE
        try {
            page_request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch (e) {
            try {
                page_request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e) { }
        }
    }
    else
        return false
    page_request.onreadystatechange = function () {
        loadpageb(page_request)
    }
    if (url.indexOf("?") == -1) {
        page_request.open('POST', url + '?dd=' + new Date().getTime());
    } else {
        page_request.open('POST', url + '&dd=' + new Date().getTime());
    }
    page_request.send(null)
}

function ajaxpagec(url) {
    var page_request = false
    if (window.XMLHttpRequest) // if Mozilla, Safari etc
        page_request = new XMLHttpRequest()
    else if (window.ActiveXObject) { // if IE
        try {
            page_request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch (e) {
            try {
                page_request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e) { }
        }
    }
    else
        return false
    page_request.onreadystatechange = function () {
        return (loadpagec(page_request));
    }
    if (url.indexOf("?") == -1) {
        page_request.open('GET', url + '?dd=' + new Date().getTime());
    } else {
        page_request.open('GET', url + '&dd=' + new Date().getTime());
    }
    page_request.send(null)
}

function refresh() {
    var sURL = unescape(window.location);
    window.location.href = sURL;
}

function PreviewImage(inputId, previewId) {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById(inputId).files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById(previewId).src = oFREvent.target.result;
        refProp();
    };
};
function refProp() { }

/* 
//code for the preview page
$(document).on('change', 'input[type="file"]', (function () {
    PreviewImage("ImagePath", "uploadPreview");
})); 
*/

/* new js */
function mvc_ajax(data, urlString, doRefresh)
{
    var retVal = -1;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: urlString,
        data: JSON.stringify(data),
        dataType: "json",
        success: function (result) {
            if (result.success) {
                retVal = result.response;                
            }
            else
            {
                alert('הנתונים בעמוד לא מעודכנים, נא רענן את העמוד');                
                if (doRefresh)
                    document.location.reload(true);
            }
        },
        error: function () {           
            alert('הנתונים בעמוד לא מעודכנים, נא רענן את העמוד');
            if (doRefresh)
                document.location.reload(true);
        }
    });
    
    return retVal;
}

/* require jquery-ui-timepicker-addon.min */
var myControl = {
    create: function (tp_inst, obj, unit, val, min, max, step) {
        $('<input class="ui-timepicker-input" value="' + val + '" style="width:50%">')
            .appendTo(obj)
            .spinner({
                min: min,
                max: max,
                step: step,
                change: function (e, ui) { // key events
                    // don't call if api was used and not key press
                    if (e.originalEvent !== undefined)
                        tp_inst._onTimeChange();
                    tp_inst._onSelectHandler();
                },
                spin: function (e, ui) { // spin events
                    tp_inst.control.value(tp_inst, obj, unit, ui.value);
                    tp_inst._onTimeChange();
                    tp_inst._onSelectHandler();
                }
            });
        return obj;
    },
    options: function (tp_inst, obj, unit, opts, val) {
        if (typeof (opts) == 'string' && val !== undefined)
            return obj.find('.ui-timepicker-input').spinner(opts, val);
        return obj.find('.ui-timepicker-input').spinner(opts);
    },
    value: function (tp_inst, obj, unit, val) {
        if (val !== undefined)
            return obj.find('.ui-timepicker-input').spinner('value', val);
        return obj.find('.ui-timepicker-input').spinner('value');
    }
};


$(document).ready(function () {
    //$.datepicker.setDefaults($.datepicker.regional['he']);
    $(".date-input").datepicker();

    $.timepicker.setDefaults(
        {
            controlType: myControl,
            timeOnlyTitle: 'זמן בלבד',
            timeText: 'שעה',
            hourText: 'שעות',
            minuteText: 'דקות',
            secondText: 'שניות',
            millisecText: 'מאיות',
            timezoneText: 'ישראל',
            currentText: 'זמן נוכחי',
            closeText: 'שלח',
            timeFormat: 'HH:mm',
            isRTL: true,
            showButtonPanel: false
        }
    );

    $(".time-input").timepicker();

    $('.datetime-input').datetimepicker();

    //$('.datetime-input').datetimepicker({});
});
/* add this to your footer:
    $(document).ready(function () {
        $.datepicker.setDefaults($.datepicker.regional['he']);
    });
*/