require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery',
        cookie:'jquery-cookie/jquery.cookie',
        login:'../js/login',
        common:'../js/common',
        template:'artTemplate/template-web',
        teacher:'../js/teacher',
        teacherAdd:'../js/teacher-add',
        bootstrap:'bootstrap/js/bootstrap.min',
        jcrop:'jcrop/js/Jcrop',
        util:'../js/util',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        form:'jquery-form/jquery.form',
        validate:'validate/jquery-validate.min',
        region:'jquery-region/jquery.region',
        uploadify:'uploadify/jquery.uploadify.min',
        settings:'../js/settings',
        ckeditor:'ckeditor/ckeditor',
        index:'../js/index',
        courselist:'../js/course-list',
        courseadd:'../js/course-add',
        basic:'../js/course-basic',
        coursepicture:'../js/course-picture',
        lesson:'../js/course-lesson',
        status:'../js/status',
        nprogress:'nprogress/nprogress',
        echarts:'echarts/echarts.min'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        },
        uploadify:{
            deps:['jquery']
        },
        ckeditor:{
            exports:'CKEDITOR'
        },
        jcrop:{
            deps:['jquery']
        }
    }
})