'use strict';

function cityData() {
  return [
    {
      "n": "北京市",
      "s": [{"n": "东城区"}, {"n": "西城区"}, {"n": "朝阳区"}, {"n": "丰台区"}, {"n": "石景山区"}, {"n": "海淀区"}, {"n": "门头沟区"}, {"n": "房山区"}, {"n": "通州区"}, {"n": "顺义区"}, {"n": "昌平区"}, {"n": "大兴区"}, {"n": "怀柔区"}, {"n": "平谷区"}, {"n": "密云县"}, {"n": "延庆县"}]
    },
    {
      "n": "天津市",
      "s": [{"n": "和平区"}, {"n": "河东区"}, {"n": "河西区"}, {"n": "南开区"}, {"n": "河北区"}, {"n": "红桥区"}, {"n": "东丽区"}, {"n": "西青区"}, {"n": "津南区"}, {"n": "北辰区"}, {"n": "武清区"}, {"n": "宝坻区"}, {"n": "滨海新区"}, {"n": "宁河县"}, {"n": "静海县"}, {"n": "蓟县"}]
    },
    {
      "n": "河北省",
      "s": [{"n": "石家庄市"}, {"n": "唐山市"}, {"n": "邯郸市"}, {"n": "邢台市"}, {"n": "保定市"}, {"n": "张家口市"}, {"n": "承德市"}, {"n": "沧州市"}, {"n": "廊坊市"}, {"n": "衡水市"}]
    },
    {
      "n": "山西省",
      "s": [{"n": "太原市"}, {"n": "大同市"}, {"n": "阳泉市"}, {"n": "长治市"}, {"n": "晋城市"}, {"n": "朔州市"}, {"n": "晋中市"}, {"n": "运城市"}, {"n": "忻州市"}, {"n": "临汾市"}, {"n": "吕梁市"}]
    },
    {
      "n": "辽宁省",
      "s": [{
        "n": "沈阳市"
      }, {"n": "大连市"}, {"n": "鞍山市"}, {"n": "抚顺市"}, {"n": "本溪市"}, {"n": "丹东市"}, {"n": "锦州市"}, {"n": "营口市"}, {"n": "阜新市"}, {"n": "辽阳市"}, {"n": "盘锦市"}, {"n": "铁岭市"}, {"n": "朝阳市"}, {"n": "葫芦岛市"}]
    },
    {
      "n": "吉林省",
      "s": [{"n": "长春市"}, {"n": "吉林市"}, {"n": "四平市"}, {"n": "辽源市"}, {"n": "通化市"}, {"n": "白山市"}, {"n": "松原市"}, {"n": "白城市"}, {"n": "延边朝鲜族自治州"}]
    },
    {
      "n": "黑龙江省",
      "s": [{"n": "哈尔滨市"}, {"n": "齐齐哈尔市"}, {"n": "鸡西市"}, {"n": "鹤岗市"}, {"n": "双鸭山市"}, {"n": "大庆市"}, {"n": "伊春市"}, {"n": "佳木斯市"}, {"n": "七台河市"}, {"n": "牡丹江市"}, {"n": "黑河市"}, {"n": "绥化市"}, {"n": "大兴安岭地区"}]
    },
    {
      "n": "上海市",
      "s": [{"n": "黄浦区"}, {"n": "徐汇区"}, {"n": "长宁区"}, {"n": "静安区"}, {"n": "普陀区"}, {"n": "闸北区"}, {"n": "虹口区"}, {"n": "杨浦区"}, {"n": "闵行区"}, {"n": "宝山区"}, {"n": "嘉定区"}, {"n": "浦东新区"}, {"n": "金山区"}, {"n": "松江区"}, {"n": "青浦区"}, {"n": "奉贤区"}, {"n": "崇明县"}]
    },
    {
      "n": "江苏省",
      "s": [{"n": "南京市"}, {"n": "无锡市"}, {"n": "徐州市"}, {"n": "常州市"}, {"n": "苏州市"}, {"n": "南通市"}, {"n": "连云港市"}, {"n": "淮安市"}, {"n": "盐城市"}, {"n": "扬州市"}, {"n": "镇江市"}, {"n": "泰州市"}, {"n": "宿迁市"}]
    },
    {
      "n": "浙江省",
      "s": [{"n": "杭州市"}, {"n": "宁波市"}, {"n": "温州市"}, {"n": "嘉兴市"}, {"n": "湖州市"}, {"n": "绍兴市"}, {"n": "金华市"}, {"n": "衢州市"}, {"n": "舟山市"}, {"n": "台州市"}, {"n": "丽水市"}]
    },
    {
      "n": "安徽省",
      "s": [{"n": "合肥市"}, {"n": "芜湖市"}, {"n": "蚌埠市"}, {"n": "淮南市"}, {"n": "马鞍山市"}, {"n": "淮北市"}, {"n": "铜陵市"}, {"n": "安庆市"}, {"n": "黄山市"}, {"n": "滁州市"}, {"n": "阜阳市"}, {"n": "宿州市"}, {"n": "六安市"}, {"n": "亳州市"}, {"n": "池州市"}, {"n": "宣城市"}]
    },
    {
      "n": "福建省",
      "s": [{"n": "福州市"}, {"n": "厦门市"}, {"n": "莆田市"}, {"n": "三明市"}, {"n": "泉州市"}, {"n": "漳州市"}, {"n": "南平市"}, {"n": "龙岩市"}, {"n": "宁德市"}]
    },
    {
      "n": "江西省",
      "s": [{"n": "南昌市"}, {"n": "景德镇市"}, {"n": "萍乡市"}, {"n": "九江市"}, {"n": "新余市"}, {"n": "鹰潭市"}, {"n": "赣州市"}, {"n": "吉安市"}, {"n": "宜春市"}, {"n": "抚州市"}, {"n": "上饶市"}]
    },
    {
      "n": "山东省",
      "s": [{"n": "济南市"}, {"n": "青岛市"}, {"n": "淄博市"}, {"n": "枣庄市"}, {"n": "东营市"}, {"n": "烟台市"}, {"n": "潍坊市"}, {"n": "济宁市"}, {"n": "泰安市"}, {"n": "威海市"}, {"n": "日照市"}, {"n": "莱芜市"}, {"n": "临沂市"}, {"n": "德州市"}, {"n": "聊城市"}, {"n": "滨州市"}, {"n": "菏泽市"}]
    },
    {
      "n": "河南省",
      "s": [{"n": "郑州市"}, {"n": "开封市"}, {"n": "洛阳市"}, {"n": "平顶山市"}, {"n": "安阳市"}, {"n": "鹤壁市"}, {"n": "新乡市"}, {"n": "焦作市"}, {"n": "濮阳市"}, {"n": "许昌市"}, {"n": "漯河市"}, {"n": "三门峡市"}, {"n": "南阳市"}, {"n": "商丘市"}, {"n": "信阳市"}, {"n": "周口市"}, {"n": "驻马店市"}, {"n": "济源市"}]
    },
    {
      "n": "湖北省",
      "s": [{"n": "武汉市"}, {"n": "黄石市"}, {"n": "十堰市"}, {"n": "宜昌市"}, {"n": "襄阳市"}, {"n": "鄂州市"}, {"n": "荆门市"}, {"n": "孝感市"}, {"n": "荆州市"}, {"n": "黄冈市"}, {"n": "咸宁市"}, {"n": "随州市"}, {"n": "恩施土家族苗族自治州"}, {"n": "仙桃市"}, {"n": "潜江市"}, {"n": "天门市"}, {"n": "神农架林区"}]
    },
    {
      "n": "湖南省",
      "s": [{"n": "长沙市"}, {"n": "株洲市"}, {"n": "湘潭市"}, {"n": "衡阳市"}, {"n": "邵阳市"}, {"n": "岳阳市"}, {"n": "常德市"}, {"n": "张家界市"}, {"n": "益阳市"}, {"n": "郴州市"}, {"n": "永州市"}, {"n": "怀化市"}, {"n": "娄底市"}, {"n": "湘西土家族苗族自治州"}]
    },
    {
      "n": "广东省",
      "s": [{"n": "广州市"}, {"n": "韶关市"}, {"n": "深圳市"}, {"n": "珠海市"}, {"n": "汕头市"}, {"n": "佛山市"}, {"n": "江门市"}, {"n": "湛江市"}, {"n": "茂名市"}, {"n": "肇庆市"}, {"n": "惠州市"}, {"n": "梅州市"}, {"n": "汕尾市"}, {"n": "河源市"}, {"n": "阳江市"}, {"n": "清远市"}, {"n": "东莞市"}, {"n": "中山市"}, {"n": "潮州市"}, {"n": "揭阳市"}, {"n": "云浮市"}]
    },
    {
      "n": "海南省",
      "s": [{"n": "海口市"}, {"n": "三亚市"}, {"n": "三沙市"}, {"n": "五指山市"}, {"n": "琼海市"}, {"n": "儋州市"}, {"n": "文昌市"}, {"n": "万宁市"}, {"n": "东方市"}, {"n": "定安县"}, {"n": "屯昌县"}, {"n": "澄迈县"}, {"n": "临高县"}, {"n": "白沙黎族自治县"}, {"n": "昌江黎族自治县"}, {"n": "乐东黎族自治县"}, {"n": "陵水黎族自治县"}, {"n": "保亭黎族苗族自治县"}, {"n": "琼中黎族苗族自治县"}]
    },
    {
      "n": "重庆市",
      "s": [{"n": "万州区"}, {"n": "涪陵区"}, {"n": "渝中区"}, {"n": "大渡口区"}, {"n": "江北区"}, {"n": "沙坪坝区"}, {"n": "九龙坡区"}, {"n": "南岸区"}, {"n": "北碚区"}, {"n": "綦江区"}, {"n": "大足区"}, {"n": "渝北区"}, {"n": "巴南区"}, {"n": "黔江区"}, {"n": "长寿区"}, {"n": "江津区"}, {"n": "合川区"}, {"n": "永川区"}, {"n": "南川区"}, {"n": "潼南县"}, {"n": "铜梁县"}, {"n": "荣昌县"}, {"n": "璧山县"}, {"n": "梁平县"}, {"n": "城口县"}, {"n": "丰都县"}, {"n": "垫江县"}, {"n": "武隆县"}, {"n": "忠县"}, {"n": "开县"}, {"n": "云阳县"}, {"n": "奉节县"}, {"n": "巫山县"}, {"n": "巫溪县"}, {"n": "石柱土家族自治县"}, {"n": "秀山土家族苗族自治县"}, {"n": "酉阳土家族苗族自治县"}, {"n": "彭水苗族土家族自治县"}]
    },
    {
      "n": "四川省",
      "s": [{"n": "成都市"}, {"n": "自贡市"}, {"n": "攀枝花市"}, {"n": "泸州市"}, {"n": "德阳市"}, {"n": "绵阳市"}, {"n": "广元市"}, {"n": "遂宁市"}, {"n": "内江市"}, {"n": "乐山市"}, {"n": "南充市"}, {"n": "眉山市"}, {"n": "宜宾市"}, {"n": "广安市"}, {"n": "达州市"}, {"n": "雅安市"}, {"n": "巴中市"}, {"n": "资阳市"}, {"n": "阿坝藏族羌族自治州"}, {"n": "甘孜藏族自治州"}, {"n": "凉山彝族自治州"}]
    },
    {
      "n": "贵州省",
      "s": [{"n": "贵阳市"}, {"n": "六盘水市"}, {"n": "遵义市"}, {"n": "安顺市"}, {"n": "毕节市"}, {"n": "铜仁市"}, {"n": "黔西南布依族苗族自治州"}, {"n": "黔东南苗族侗族自治州"}, {"n": "黔南布依族苗族自治州"}]
    },
    {
      "n": "云南省",
      "s": [{"n": "昆明市"}, {"n": "曲靖市"}, {"n": "玉溪市"}, {"n": "保山市"}, {"n": "昭通市"}, {"n": "丽江市"}, {"n": "普洱市"}, {"n": "临沧市"}, {"n": "楚雄彝族自治州"}, {"n": "红河哈尼族彝族自治州"}, {"n": "文山壮族苗族自治州"}, {"n": "西双版纳傣族自治州"}, {"n": "大理白族自治州"}, {"n": "德宏傣族景颇族自治州"}, {"n": "怒江傈僳族自治州"}, {"n": "迪庆藏族自治州"}]
    },
    {
      "n": "陕西省",
      "s": [{"n": "西安市"}, {"n": "铜川市"}, {"n": "宝鸡市"}, {"n": "咸阳市"}, {"n": "渭南市"}, {"n": "延安市"}, {"n": "汉中市"}, {"n": "榆林市"}, {"n": "安康市"}, {"n": "商洛市"}]
    },
    {
      "n": "甘肃省",
      "s": [{"n": "兰州市"}, {"n": "嘉峪关市"}, {"n": "金昌市"}, {"n": "白银市"}, {"n": "天水市"}, {"n": "武威市"}, {"n": "张掖市"}, {"n": "平凉市"}, {"n": "酒泉市"}, {"n": "庆阳市"}, {"n": "定西市"}, {"n": "陇南市"}, {"n": "临夏回族自治州"}, {"n": "甘南藏族自治州"}]
    },
    {
      "n": "青海省",
      "s": [{"n": "西宁市"}, {"n": "海东市"}, {"n": "海北藏族自治州"}, {"n": "黄南藏族自治州"}, {"n": "海南藏族自治州"}, {"n": "果洛藏族自治州"}, {"n": "玉树藏族自治州"}, {"n": "海西蒙古族藏族自治州"}]
    },
    {
      "n": "西藏自治区",
      "s": [{"n": "拉萨市"}, {"n": "昌都地区"}, {"n": "山南地区"}, {"n": "日喀则地区"}, {"n": "那曲地区"}, {"n": "阿里地区"}, {"n": "林芝地区"}]
    },
    {
      "n": "内蒙古自治区",
      "s": [{"n": "呼和浩特市"}, {"n": "包头市"}, {"n": "乌海市"}, {"n": "赤峰市"}, {"n": "通辽市"}, {"n": "鄂尔多斯市"}, {"n": "呼伦贝尔市"}, {"n": "巴彦淖尔市"}, {"n": "乌兰察布市"}, {"n": "兴安盟"}, {"n": "锡林郭勒盟"}, {"n": "阿拉善盟"}]
    },
    {
      "n": "宁夏回族自治区",
      "s": [{"n": "银川市"}, {"n": "石嘴山市"}, {"n": "吴忠市"}, {"n": "固原市"}, {"n": "中卫市"}]
    },
    {
      "n": "广西壮族自治区",
      "s": [{"n": "南宁市"}, {"n": "柳州市"}, {"n": "桂林市"}, {"n": "梧州市"}, {"n": "北海市"}, {"n": "防城港市"}, {"n": "钦州市"}, {"n": "贵港市"}, {"n": "玉林市"}, {"n": "百色市"}, {"n": "贺州市"}, {"n": "河池市"}, {"n": "来宾市"}, {"n": "崇左市"}]
    },
    {
      "n": "新疆维吾尔自治区",
      "s": [{"n": "乌鲁木齐市"}, {"n": "克拉玛依市"}, {"n": "吐鲁番地区"}, {"n": "哈密地区"}, {"n": "昌吉回族自治州"}, {"n": "博尔塔拉蒙古自治州"}, {"n": "巴音郭楞蒙古自治州"}, {"n": "阿克苏地区"}, {"n": "克孜勒苏柯尔克孜自治州"}, {"n": "喀什地区"}, {"n": "和田地区"}, {"n": "伊犁哈萨克自治州"}, {"n": "塔城地区"}, {"n": "阿勒泰地区"}, {"n": "石河子市"}, {"n": "阿拉尔市"}, {"n": "图木舒克市"}, {"n": "五家渠市"}]
    },
    {
      "n": "香港特别行政区",
      "s": [{"n": "中西区"}, {"n": "湾仔区"}, {"n": "东区"}, {"n": "南区"}, {"n": "油尖旺区"}, {"n": "深水埗区"}, {"n": "九龙城区"}, {"n": "黄大仙区"}, {"n": "观塘区"}, {"n": "葵青区"}, {"n": "荃湾区"}, {"n": "屯门区"}, {"n": "元朗区"}, {"n": "北区"}, {"n": "大埔区"}, {"n": "沙田区"}, {"n": "西贡区"}, {"n": "离岛区"}]
    },
    {
      "n": "澳门特别行政区",
      "s": [{"n": "花地玛堂区"}, {"n": "圣安多尼堂区"}, {"n": "大堂区"}, {"n": "望德堂区"}, {"n": "风顺堂区"}, {"n": "嘉模堂区"}, {"n": "圣方济各堂区"}, {"n": "路氹城"}]
    },
    {
      "n": "台湾",
      "s": [{"n": "台北市"}, {"n": "新北市"}, {"n": "桃园市"}, {"n": "台中市"}, {"n": "台南市"}, {"n": "高雄市"}, {"n": "基隆市"}, {"n": "新竹市"}, {"n": "嘉义市"}, {"n": "新竹县"}, {"n": "苗栗县"}, {"n": "彰化县"}, {"n": "南投县"}, {"n": "云林县"}, {"n": "嘉义县"}, {"n": "屏东县"}, {"n": "宜兰县"}, {"n": "花莲县"}, {"n": "台东县"}, {"n": "澎湖县"}, {"n": "金门县"}, {"n": "连江县"}]
    }
  ]
}

module.exports = cityData;