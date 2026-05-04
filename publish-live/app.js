const WORDS = [
  { level: "A2", nl: "de afspraak", ipa: "/də ˈɑfspraːk/", pos: "名词 · zelfstandig naamwoord", zh: "约会；预约", example: "Ik heb morgen een afspraak bij de dokter.", exampleZh: "我明天有一个医生预约。" },
  { level: "A2", nl: "aanvragen", ipa: "/ˈaːnˌvraːɣə(n)/", pos: "动词 · werkwoord", zh: "申请", example: "Je kunt online een nieuw paspoort aanvragen.", exampleZh: "你可以在线申请新护照。" },
  { level: "A2", nl: "beschikbaar", ipa: "/bəˈsxɪkbaːr/", pos: "形容词 · bijvoeglijk naamwoord", zh: "可用的；有空的", example: "Deze kamer is vanaf maandag beschikbaar.", exampleZh: "这个房间从周一开始可用。" },
  { level: "A2", nl: "de belasting", ipa: "/də bəˈlɑstɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "税；税务", example: "Iedereen moet op tijd belasting betalen.", exampleZh: "每个人都必须按时缴税。" },
  { level: "A2", nl: "de rekening", ipa: "/də ˈreːkənɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "账单；账户", example: "Mag ik de rekening, alstublieft?", exampleZh: "请给我账单好吗？" },
  { level: "A2", nl: "verhuizen", ipa: "/vərˈɦœyzə(n)/", pos: "动词 · werkwoord", zh: "搬家", example: "Wij verhuizen volgende maand naar Utrecht.", exampleZh: "我们下个月搬到乌得勒支。" },
  { level: "A2", nl: "de verzekering", ipa: "/də vərˈzeːkərɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "保险", example: "Mijn zorgverzekering is vrij duur.", exampleZh: "我的医疗保险相当贵。" },
  { level: "A2", nl: "tevreden", ipa: "/təˈvreːdə(n)/", pos: "形容词 · bijvoeglijk naamwoord", zh: "满意的", example: "Ben je tevreden met je nieuwe baan?", exampleZh: "你对新工作满意吗？" },
  { level: "A2", nl: "de omgeving", ipa: "/də ɔmˈɣeːvɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "环境；周边", example: "De omgeving van het station is druk.", exampleZh: "车站周边很繁忙。" },
  { level: "A2", nl: "controleren", ipa: "/kɔntrɔˈleːrə(n)/", pos: "动词 · werkwoord", zh: "检查；核对", example: "Controleer je gegevens voordat je betaalt.", exampleZh: "付款前请核对你的信息。" },
  { level: "A2", nl: "de opleiding", ipa: "/də ˈɔplɛidɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "教育；培训；专业", example: "Zij volgt een opleiding tot verpleegkundige.", exampleZh: "她正在接受护士培训。" },
  { level: "A2", nl: "de ervaring", ipa: "/də ɛrˈvaːrɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "经验；经历", example: "Heb je ervaring met klantenservice?", exampleZh: "你有客服经验吗？" },
  { level: "A2", nl: "bevestigen", ipa: "/bəˈvɛstəɣə(n)/", pos: "动词 · werkwoord", zh: "确认", example: "Kunt u de reservering per e-mail bevestigen?", exampleZh: "您能通过邮件确认预订吗？" },
  { level: "A2", nl: "de keuze", ipa: "/də ˈkøːzə/", pos: "名词 · zelfstandig naamwoord", zh: "选择", example: "Dat is een moeilijke keuze.", exampleZh: "那是一个困难的选择。" },
  { level: "A2", nl: "handig", ipa: "/ˈɦɑndəx/", pos: "形容词 · bijvoeglijk naamwoord", zh: "方便的；灵巧的", example: "Deze app is handig voor onderweg.", exampleZh: "这个应用在路上使用很方便。" },
  { level: "A2", nl: "de afspraak afzeggen", ipa: "/də ˈɑfspraːk ˈɑfzɛɣə(n)/", pos: "表达 · uitdrukking", zh: "取消预约", example: "Ik moet mijn afspraak afzeggen omdat ik ziek ben.", exampleZh: "因为生病，我必须取消预约。" },
  { level: "A2", nl: "gemiddeld", ipa: "/ɣəˈmɪdəlt/", pos: "形容词 · bijvoeglijk naamwoord", zh: "平均的；普通的", example: "Gemiddeld leer ik twintig woorden per dag.", exampleZh: "我平均每天学二十个单词。" },
  { level: "A2", nl: "de werkplek", ipa: "/də ˈʋɛrkplɛk/", pos: "名词 · zelfstandig naamwoord", zh: "工作场所", example: "Mijn werkplek is rustig en licht.", exampleZh: "我的工作场所安静又明亮。" },
  { level: "A2", nl: "onderweg", ipa: "/ˌɔndərˈʋɛx/", pos: "副词 · bijwoord", zh: "在路上", example: "Ik luister onderweg naar Nederlandse podcasts.", exampleZh: "我在路上听荷兰语播客。" },
  { level: "A2", nl: "duidelijk", ipa: "/ˈdœydələk/", pos: "形容词 · bijvoeglijk naamwoord", zh: "清楚的；明确的", example: "De uitleg van de docent is duidelijk.", exampleZh: "老师的解释很清楚。" },

  { level: "B1", nl: "de aanleiding", ipa: "/də ˈaːnlɛidɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "起因；契机", example: "Wat was de aanleiding voor dit gesprek?", exampleZh: "这次谈话的起因是什么？" },
  { level: "B1", nl: "aanpassen", ipa: "/ˈaːnˌpɑsə(n)/", pos: "动词 · werkwoord", zh: "调整；适应", example: "Ik moet mijn planning aanpassen.", exampleZh: "我必须调整我的计划。" },
  { level: "B1", nl: "de verantwoordelijkheid", ipa: "/də vərˌɑntʋoːrdələkˈɦɛit/", pos: "名词 · zelfstandig naamwoord", zh: "责任", example: "Iedere werknemer heeft zijn eigen verantwoordelijkheid.", exampleZh: "每位员工都有自己的责任。" },
  { level: "B1", nl: "twijfelen", ipa: "/ˈtʋɛifələ(n)/", pos: "动词 · werkwoord", zh: "犹豫；怀疑", example: "Ik twijfel tussen twee cursussen.", exampleZh: "我在两门课程之间犹豫。" },
  { level: "B1", nl: "de gewoonte", ipa: "/də ɣəˈʋoːntə/", pos: "名词 · zelfstandig naamwoord", zh: "习惯", example: "Het is een goede gewoonte om elke dag te oefenen.", exampleZh: "每天练习是个好习惯。" },
  { level: "B1", nl: "bespreken", ipa: "/bəˈspreːkə(n)/", pos: "动词 · werkwoord", zh: "讨论；商量", example: "We bespreken het probleem in de vergadering.", exampleZh: "我们在会议上讨论这个问题。" },
  { level: "B1", nl: "de samenleving", ipa: "/də ˈsaːmənleːvɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "社会", example: "Taal helpt je om mee te doen in de samenleving.", exampleZh: "语言帮助你参与社会生活。" },
  { level: "B1", nl: "waarschijnlijk", ipa: "/ʋaːrˈsxɛinlək/", pos: "副词 · bijwoord", zh: "可能；大概", example: "Waarschijnlijk regent het vanavond.", exampleZh: "今晚可能会下雨。" },
  { level: "B1", nl: "de verbetering", ipa: "/də vərˈbeːtərɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "改善；提高", example: "Ik zie veel verbetering in je uitspraak.", exampleZh: "我看到你的发音有很大进步。" },
  { level: "B1", nl: "beïnvloeden", ipa: "/bəˈɪnvludə(n)/", pos: "动词 · werkwoord", zh: "影响", example: "Slaap beïnvloedt je concentratie.", exampleZh: "睡眠会影响你的注意力。" },
  { level: "B1", nl: "de voorwaarde", ipa: "/də ˈvoːrʋaːrdə/", pos: "名词 · zelfstandig naamwoord", zh: "条件", example: "Een diploma is een belangrijke voorwaarde.", exampleZh: "文凭是一个重要条件。" },
  { level: "B1", nl: "ondersteunen", ipa: "/ˌɔndərˈstøːnə(n)/", pos: "动词 · werkwoord", zh: "支持", example: "De gemeente ondersteunt nieuwe inwoners.", exampleZh: "市政府支持新居民。" },
  { level: "B1", nl: "het gevolg", ipa: "/ət ɣəˈvɔlx/", pos: "名词 · zelfstandig naamwoord", zh: "结果；后果", example: "Wat zijn de gevolgen van deze beslissing?", exampleZh: "这个决定有什么后果？" },
  { level: "B1", nl: "betrouwbaar", ipa: "/bəˈtrʌubaːr/", pos: "形容词 · bijvoeglijk naamwoord", zh: "可靠的", example: "Deze informatie komt uit een betrouwbare bron.", exampleZh: "这些信息来自可靠来源。" },
  { level: "B1", nl: "de aanvraag", ipa: "/də ˈaːnvraːx/", pos: "名词 · zelfstandig naamwoord", zh: "申请", example: "Mijn aanvraag is nog in behandeling.", exampleZh: "我的申请仍在处理中。" },
  { level: "B1", nl: "vergelijken", ipa: "/vərˈɣəlɛikə(n)/", pos: "动词 · werkwoord", zh: "比较", example: "Je kunt de prijzen online vergelijken.", exampleZh: "你可以在线比较价格。" },
  { level: "B1", nl: "de ontwikkeling", ipa: "/də ɔntˈʋɪkəlɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "发展", example: "De ontwikkeling van de stad gaat snel.", exampleZh: "这座城市发展很快。" },
  { level: "B1", nl: "uiteindelijk", ipa: "/œytˈɛindələk/", pos: "副词 · bijwoord", zh: "最终", example: "Uiteindelijk vond ik een betere oplossing.", exampleZh: "最终我找到了更好的解决办法。" },
  { level: "B1", nl: "de mening", ipa: "/də ˈmeːnɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "意见；看法", example: "Iedereen mag zijn mening geven.", exampleZh: "每个人都可以发表自己的意见。" },
  { level: "B1", nl: "toestaan", ipa: "/ˈtustaːn/", pos: "动词 · werkwoord", zh: "允许", example: "Roken is hier niet toegestaan.", exampleZh: "这里不允许吸烟。" },

  { level: "B2", nl: "de onderhandeling", ipa: "/də ˌɔndərˈɦɑndəlɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "谈判；协商", example: "De onderhandelingen duurden drie weken.", exampleZh: "谈判持续了三周。" },
  { level: "B2", nl: "benadrukken", ipa: "/bəˈnɑdrʏkə(n)/", pos: "动词 · werkwoord", zh: "强调", example: "De minister benadrukte het belang van onderwijs.", exampleZh: "部长强调了教育的重要性。" },
  { level: "B2", nl: "de belemmering", ipa: "/də bəˈlɛmerɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "障碍；阻碍", example: "Gebrek aan tijd is een grote belemmering.", exampleZh: "缺少时间是一个很大的障碍。" },
  { level: "B2", nl: "aanzienlijk", ipa: "/ˈaːnzinlək/", pos: "形容词 · bijvoeglijk naamwoord", zh: "相当大的；显著的", example: "De kosten zijn aanzienlijk gestegen.", exampleZh: "成本显著上升。" },
  { level: "B2", nl: "veronderstellen", ipa: "/vərˌɔndərˈstɛlə(n)/", pos: "动词 · werkwoord", zh: "假设；认为", example: "We veronderstellen dat de cijfers kloppen.", exampleZh: "我们假设这些数字是正确的。" },
  { level: "B2", nl: "de betrekking", ipa: "/də bəˈtrɛkɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "关系；职位", example: "De betrekkingen tussen de landen zijn verbeterd.", exampleZh: "两国关系有所改善。" },
  { level: "B2", nl: "doeltreffend", ipa: "/ˈdultreːfənt/", pos: "形容词 · bijvoeglijk naamwoord", zh: "有效的", example: "Dit is een doeltreffende methode om woorden te leren.", exampleZh: "这是学习单词的有效方法。" },
  { level: "B2", nl: "uitvoeren", ipa: "/ˈœytvuːrə(n)/", pos: "动词 · werkwoord", zh: "执行；实施", example: "Het team voert het plan stap voor stap uit.", exampleZh: "团队一步一步执行计划。" },
  { level: "B2", nl: "de samenhang", ipa: "/də ˈsaːmənɦɑŋ/", pos: "名词 · zelfstandig naamwoord", zh: "连贯性；关联", example: "Er is weinig samenhang tussen de hoofdstukken.", exampleZh: "章节之间缺乏连贯性。" },
  { level: "B2", nl: "genuanceerd", ipa: "/ɣənyɑnˈseːrt/", pos: "形容词 · bijvoeglijk naamwoord", zh: "有细微差别的；有分寸的", example: "Zij gaf een genuanceerd antwoord.", exampleZh: "她给出了一个有分寸的回答。" },
  { level: "B2", nl: "de veronderstelling", ipa: "/də vərˌɔndərˈstɛlɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "假设", example: "Die veronderstelling is nog niet bewezen.", exampleZh: "那个假设还没有被证明。" },
  { level: "B2", nl: "onderbouwen", ipa: "/ˌɔndərˈbʌuə(n)/", pos: "动词 · werkwoord", zh: "论证；支撑", example: "Je moet je mening met voorbeelden onderbouwen.", exampleZh: "你必须用例子支撑你的观点。" },
  { level: "B2", nl: "de voorziening", ipa: "/də voːrˈzinɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "设施；供应", example: "De buurt heeft goede openbare voorzieningen.", exampleZh: "这个社区有良好的公共设施。" },
  { level: "B2", nl: "aantonen", ipa: "/ˈaːntoːnə(n)/", pos: "动词 · werkwoord", zh: "证明；显示", example: "Het onderzoek toont aan dat oefening helpt.", exampleZh: "研究显示练习是有帮助的。" },
  { level: "B2", nl: "maatschappelijk", ipa: "/ˈmaːtsxɑpələk/", pos: "形容词 · bijvoeglijk naamwoord", zh: "社会的", example: "Werkloosheid is een maatschappelijk probleem.", exampleZh: "失业是一个社会问题。" },
  { level: "B2", nl: "de tegenstrijdigheid", ipa: "/də ˈteːɣə(n)strɛidəxɦɛit/", pos: "名词 · zelfstandig naamwoord", zh: "矛盾", example: "Er zit een tegenstrijdigheid in zijn verhaal.", exampleZh: "他的叙述里有一个矛盾。" },
  { level: "B2", nl: "nastreven", ipa: "/ˈnaːstreːvə(n)/", pos: "动词 · werkwoord", zh: "追求", example: "Veel mensen streven naar een betere balans.", exampleZh: "许多人追求更好的平衡。" },
  { level: "B2", nl: "de invalshoek", ipa: "/də ˈɪnvɑlshuk/", pos: "名词 · zelfstandig naamwoord", zh: "角度；视角", example: "Vanuit deze invalshoek lijkt het probleem kleiner.", exampleZh: "从这个角度看，问题似乎更小。" },
  { level: "B2", nl: "zorgvuldig", ipa: "/ˈzɔrxvʏldəx/", pos: "形容词 · bijvoeglijk naamwoord", zh: "仔细的；谨慎的", example: "Lees het contract zorgvuldig voordat je tekent.", exampleZh: "签字前请仔细阅读合同。" },
  { level: "B2", nl: "de neiging", ipa: "/də ˈnɛiɣɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "倾向", example: "Ik heb de neiging om te snel te spreken.", exampleZh: "我有说话太快的倾向。" },

  { level: "C1", nl: "de wisselwerking", ipa: "/də ˈʋɪsəlʋɛrkɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "相互作用", example: "Er is een sterke wisselwerking tussen taal en cultuur.", exampleZh: "语言和文化之间有强烈的相互作用。" },
  { level: "C1", nl: "uiteenzetten", ipa: "/œytˈeːnzɛtə(n)/", pos: "动词 · werkwoord", zh: "阐述；详细说明", example: "De onderzoeker zette zijn standpunt helder uiteen.", exampleZh: "研究者清楚阐述了自己的立场。" },
  { level: "C1", nl: "de beweegreden", ipa: "/də bəˈʋeːxreːdə(n)/", pos: "名词 · zelfstandig naamwoord", zh: "动机；缘由", example: "Zijn beweegredenen waren niet meteen duidelijk.", exampleZh: "他的动机并不马上清楚。" },
  { level: "C1", nl: "doorslaggevend", ipa: "/ˈdoːrslaːxɣeːvənt/", pos: "形容词 · bijvoeglijk naamwoord", zh: "决定性的", example: "Dat argument was doorslaggevend in het debat.", exampleZh: "那个论点在辩论中是决定性的。" },
  { level: "C1", nl: "weerleggen", ipa: "/ˈʋeːrlɛɣə(n)/", pos: "动词 · werkwoord", zh: "反驳；驳斥", example: "Zij weerlegde de kritiek met duidelijke cijfers.", exampleZh: "她用清楚的数据反驳了批评。" },
  { level: "C1", nl: "de terughoudendheid", ipa: "/də təˈrʏxɦʌudəntɦɛit/", pos: "名词 · zelfstandig naamwoord", zh: "克制；保留态度", example: "Er is veel terughoudendheid rond deze maatregel.", exampleZh: "围绕这项措施有很多保留态度。" },
  { level: "C1", nl: "voorbarig", ipa: "/ˈvoːrbaːrəx/", pos: "形容词 · bijvoeglijk naamwoord", zh: "过早的；草率的", example: "Het is voorbarig om nu conclusies te trekken.", exampleZh: "现在下结论还为时过早。" },
  { level: "C1", nl: "verankeren", ipa: "/vərˈɑŋkərə(n)/", pos: "动词 · werkwoord", zh: "固定；扎根；制度化", example: "De rechten zijn in de wet verankerd.", exampleZh: "这些权利被写入法律并固定下来。" },
  { level: "C1", nl: "de draagwijdte", ipa: "/də ˈdraːxʋɛitə/", pos: "名词 · zelfstandig naamwoord", zh: "范围；影响力", example: "De draagwijdte van het besluit is enorm.", exampleZh: "这个决定的影响范围巨大。" },
  { level: "C1", nl: "ogenschijnlijk", ipa: "/ˈoːɣə(n)sxɛinlək/", pos: "副词 · bijwoord", zh: "表面上；看似", example: "Het probleem lijkt ogenschijnlijk eenvoudig.", exampleZh: "这个问题表面上看很简单。" },
  { level: "C1", nl: "de nuancering", ipa: "/də nyɑnˈseːrɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "细微区分；修正说明", example: "Die nuancering maakt je tekst overtuigender.", exampleZh: "这种细微区分让你的文章更有说服力。" },
  { level: "C1", nl: "bepleiten", ipa: "/bəˈplɛitə(n)/", pos: "动词 · werkwoord", zh: "主张；倡导", example: "De auteur bepleit een strengere aanpak.", exampleZh: "作者主张采取更严格的方法。" },
  { level: "C1", nl: "onmiskenbaar", ipa: "/ɔnˈmɪskɛnbaːr/", pos: "形容词 · bijvoeglijk naamwoord", zh: "不可否认的；明显的", example: "Zijn invloed op het beleid is onmiskenbaar.", exampleZh: "他对政策的影响是不可否认的。" },
  { level: "C1", nl: "de afweging", ipa: "/də ˈɑfʋeːɣɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "权衡", example: "We moeten een zorgvuldige afweging maken.", exampleZh: "我们必须做出谨慎的权衡。" },
  { level: "C1", nl: "ondergeschikt", ipa: "/ˌɔndərɣəˈsxɪkt/", pos: "形容词 · bijvoeglijk naamwoord", zh: "次要的；从属的", example: "Dat detail is ondergeschikt aan het hoofdargument.", exampleZh: "那个细节从属于主要论点。" },
  { level: "C1", nl: "de totstandkoming", ipa: "/də tɔtˈstɑntkoːmɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "形成；产生", example: "De totstandkoming van het akkoord duurde maanden.", exampleZh: "协议的形成持续了数月。" },
  { level: "C1", nl: "impliceren", ipa: "/ɪmpliˈseːrə(n)/", pos: "动词 · werkwoord", zh: "暗示；意味着", example: "Deze keuze impliceert extra verantwoordelijkheid.", exampleZh: "这个选择意味着额外责任。" },
  { level: "C1", nl: "de weerbaarheid", ipa: "/də ˈʋeːrbaːrɦɛit/", pos: "名词 · zelfstandig naamwoord", zh: "抗压能力；韧性", example: "Taalvaardigheid vergroot je weerbaarheid op het werk.", exampleZh: "语言能力增强你在工作中的韧性。" },
  { level: "C1", nl: "allesbehalve", ipa: "/ˌɑləsbəˈɦɑlvə/", pos: "副词 · bijwoord", zh: "绝非；一点也不", example: "De oplossing is allesbehalve eenvoudig.", exampleZh: "这个解决方案绝不简单。" },
  { level: "C1", nl: "de verantwoording", ipa: "/də vərˈɑntʋoːrdɪŋ/", pos: "名词 · zelfstandig naamwoord", zh: "解释；责任说明", example: "De organisatie moet publieke verantwoording afleggen.", exampleZh: "该组织必须向公众作出责任说明。" }
];

const STORAGE_KEY = "nl-a2-c1-progress";
const FREE_WORD_LIMIT = 200;
const PRO_CODE_HASHES = new Set(["1JFRT6M", "SCZG1W", "6VP5N3", "YRF4GA", "16SYMAL", "1A0SHIK", "10I0QK7", "70YGCM", "8TLFP5", "17LJC4O", "15JMLAR", "1MH5ZC2", "SGRLNG"]);
const todayKey = new Date().toISOString().slice(0, 10);
const $ = (id) => document.getElementById(id);

const VERB_FORMS = {
  aanvragen: {
    forms: [["infinitief", "aanvragen"], ["ik", "vraag aan"], ["jij/hij/zij", "vraagt aan"], ["wij/zij", "vragen aan"], ["verleden tijd", "vroeg aan / vroegen aan"], ["voltooid deelwoord", "aangevraagd"]],
    examples: ["Ik vraag vandaag een verblijfsdocument aan.", "Zij vroeg vorige week een nieuw paspoort aan.", "We hebben de subsidie online aangevraagd."]
  },
  verhuizen: {
    forms: [["infinitief", "verhuizen"], ["ik", "verhuis"], ["jij/hij/zij", "verhuist"], ["wij/zij", "verhuizen"], ["verleden tijd", "verhuisde / verhuisden"], ["voltooid deelwoord", "verhuisd"]],
    examples: ["Ik verhuis in juni naar Leiden.", "Wij verhuisden vorig jaar naar een groter huis.", "Zij is naar Rotterdam verhuisd."]
  },
  controleren: {
    forms: [["infinitief", "controleren"], ["ik", "controleer"], ["jij/hij/zij", "controleert"], ["wij/zij", "controleren"], ["verleden tijd", "controleerde / controleerden"], ["voltooid deelwoord", "gecontroleerd"]],
    examples: ["Ik controleer mijn antwoorden.", "De docent controleerde de formulieren.", "Heb je de datum gecontroleerd?"]
  },
  bevestigen: {
    forms: [["infinitief", "bevestigen"], ["ik", "bevestig"], ["jij/hij/zij", "bevestigt"], ["wij/zij", "bevestigen"], ["verleden tijd", "bevestigde / bevestigden"], ["voltooid deelwoord", "bevestigd"]],
    examples: ["Ik bevestig de afspraak per e-mail.", "De medewerker bevestigde mijn reservering.", "De betaling is bevestigd."]
  },
  aanpassen: {
    forms: [["infinitief", "aanpassen"], ["ik", "pas aan"], ["jij/hij/zij", "past aan"], ["wij/zij", "passen aan"], ["verleden tijd", "paste aan / pasten aan"], ["voltooid deelwoord", "aangepast"]],
    examples: ["Ik pas mijn planning aan.", "Zij paste haar tekst gisteren aan.", "We hebben het rooster aangepast."]
  },
  twijfelen: {
    forms: [["infinitief", "twijfelen"], ["ik", "twijfel"], ["jij/hij/zij", "twijfelt"], ["wij/zij", "twijfelen"], ["verleden tijd", "twijfelde / twijfelden"], ["voltooid deelwoord", "getwijfeld"]],
    examples: ["Ik twijfel over mijn keuze.", "Hij twijfelde aan het antwoord.", "We hebben lang getwijfeld."]
  },
  bespreken: {
    forms: [["infinitief", "bespreken"], ["ik", "bespreek"], ["jij/hij/zij", "bespreekt"], ["wij/zij", "bespreken"], ["verleden tijd", "besprak / bespraken"], ["voltooid deelwoord", "besproken"]],
    examples: ["Ik bespreek het probleem met mijn collega.", "We bespraken de resultaten gisteren.", "Het voorstel is besproken."]
  },
  beïnvloeden: {
    forms: [["infinitief", "beïnvloeden"], ["ik", "beïnvloed"], ["jij/hij/zij", "beïnvloedt"], ["wij/zij", "beïnvloeden"], ["verleden tijd", "beïnvloedde / beïnvloedden"], ["voltooid deelwoord", "beïnvloed"]],
    examples: ["Stress beïnvloedt mijn slaap.", "Het weer beïnvloedde de planning.", "Zijn mening is door de cijfers beïnvloed."]
  },
  ondersteunen: {
    forms: [["infinitief", "ondersteunen"], ["ik", "ondersteun"], ["jij/hij/zij", "ondersteunt"], ["wij/zij", "ondersteunen"], ["verleden tijd", "ondersteunde / ondersteunden"], ["voltooid deelwoord", "ondersteund"]],
    examples: ["Ik ondersteun nieuwe studenten.", "De gemeente ondersteunde het project.", "Wij worden goed ondersteund."]
  },
  vergelijken: {
    forms: [["infinitief", "vergelijken"], ["ik", "vergelijk"], ["jij/hij/zij", "vergelijkt"], ["wij/zij", "vergelijken"], ["verleden tijd", "vergeleek / vergeleken"], ["voltooid deelwoord", "vergeleken"]],
    examples: ["Ik vergelijk de prijzen.", "Zij vergeleek twee opleidingen.", "We hebben de opties vergeleken."]
  },
  toestaan: {
    forms: [["infinitief", "toestaan"], ["ik", "sta toe"], ["jij/hij/zij", "staat toe"], ["wij/zij", "staan toe"], ["verleden tijd", "stond toe / stonden toe"], ["voltooid deelwoord", "toegestaan"]],
    examples: ["Ik sta geen fouten in het formulier toe.", "De school stond telefoons niet toe.", "Roken is hier niet toegestaan."]
  },
  benadrukken: {
    forms: [["infinitief", "benadrukken"], ["ik", "benadruk"], ["jij/hij/zij", "benadrukt"], ["wij/zij", "benadrukken"], ["verleden tijd", "benadrukte / benadrukten"], ["voltooid deelwoord", "benadrukt"]],
    examples: ["Ik benadruk het verschil.", "De docent benadrukte de uitspraak.", "Het belang is vaak benadrukt."]
  },
  veronderstellen: {
    forms: [["infinitief", "veronderstellen"], ["ik", "veronderstel"], ["jij/hij/zij", "veronderstelt"], ["wij/zij", "veronderstellen"], ["verleden tijd", "veronderstelde / veronderstelden"], ["voltooid deelwoord", "verondersteld"]],
    examples: ["Ik veronderstel dat je akkoord gaat.", "Men veronderstelde dat de data klopten.", "Dat werd lang verondersteld."]
  },
  uitvoeren: {
    forms: [["infinitief", "uitvoeren"], ["ik", "voer uit"], ["jij/hij/zij", "voert uit"], ["wij/zij", "voeren uit"], ["verleden tijd", "voerde uit / voerden uit"], ["voltooid deelwoord", "uitgevoerd"]],
    examples: ["Ik voer de opdracht uit.", "Het team voerde het plan uit.", "De controle is uitgevoerd."]
  },
  onderbouwen: {
    forms: [["infinitief", "onderbouwen"], ["ik", "onderbouw"], ["jij/hij/zij", "onderbouwt"], ["wij/zij", "onderbouwen"], ["verleden tijd", "onderbouwde / onderbouwden"], ["voltooid deelwoord", "onderbouwd"]],
    examples: ["Ik onderbouw mijn mening met voorbeelden.", "Zij onderbouwde haar argument goed.", "De conclusie is met cijfers onderbouwd."]
  },
  aantonen: {
    forms: [["infinitief", "aantonen"], ["ik", "toon aan"], ["jij/hij/zij", "toont aan"], ["wij/zij", "tonen aan"], ["verleden tijd", "toonde aan / toonden aan"], ["voltooid deelwoord", "aangetoond"]],
    examples: ["Ik toon het verschil aan.", "Het onderzoek toonde het effect aan.", "Dat is duidelijk aangetoond."]
  },
  nastreven: {
    forms: [["infinitief", "nastreven"], ["ik", "streef na"], ["jij/hij/zij", "streeft na"], ["wij/zij", "streven na"], ["verleden tijd", "streefde na / streefden na"], ["voltooid deelwoord", "nagestreefd"]],
    examples: ["Ik streef een hoger niveau na.", "Zij streefde meer vrijheid na.", "Dat doel is jarenlang nagestreefd."]
  },
  uiteenzetten: {
    forms: [["infinitief", "uiteenzetten"], ["ik", "zet uiteen"], ["jij/hij/zij", "zet uiteen"], ["wij/zij", "zetten uiteen"], ["verleden tijd", "zette uiteen / zetten uiteen"], ["voltooid deelwoord", "uiteengezet"]],
    examples: ["Ik zet mijn standpunt uiteen.", "De spreker zette het probleem helder uiteen.", "De regels zijn duidelijk uiteengezet."]
  },
  weerleggen: {
    forms: [["infinitief", "weerleggen"], ["ik", "weerleg"], ["jij/hij/zij", "weerlegt"], ["wij/zij", "weerleggen"], ["verleden tijd", "weerlegde / weerlegden"], ["voltooid deelwoord", "weerlegd"]],
    examples: ["Ik weerleg dat argument.", "Zij weerlegde de kritiek met cijfers.", "De bewering is weerlegd."]
  },
  verankeren: {
    forms: [["infinitief", "verankeren"], ["ik", "veranker"], ["jij/hij/zij", "verankert"], ["wij/zij", "verankeren"], ["verleden tijd", "verankerde / verankerden"], ["voltooid deelwoord", "verankerd"]],
    examples: ["Ik veranker de afspraak in het contract.", "De wet verankerde deze rechten.", "De regel is juridisch verankerd."]
  },
  bepleiten: {
    forms: [["infinitief", "bepleiten"], ["ik", "bepleit"], ["jij/hij/zij", "bepleit"], ["wij/zij", "bepleiten"], ["verleden tijd", "bepleitte / bepleitten"], ["voltooid deelwoord", "bepleit"]],
    examples: ["Ik bepleit een praktische oplossing.", "De auteur bepleitte een strengere aanpak.", "Die maatregel is vaak bepleit."]
  },
  impliceren: {
    forms: [["infinitief", "impliceren"], ["ik", "impliceer"], ["jij/hij/zij", "impliceert"], ["wij/zij", "impliceren"], ["verleden tijd", "impliceerde / impliceerden"], ["voltooid deelwoord", "geïmpliceerd"]],
    examples: ["Dit impliceert extra werk.", "Zijn antwoord impliceerde twijfel.", "Dat werd niet geïmpliceerd."]
  }
};

const NOUN_FORMS = {
  afspraak: ["de", "afspraken"],
  belasting: ["de", "belastingen"],
  rekening: ["de", "rekeningen"],
  verzekering: ["de", "verzekeringen"],
  omgeving: ["de", "omgevingen"],
  opleiding: ["de", "opleidingen"],
  ervaring: ["de", "ervaringen"],
  keuze: ["de", "keuzes"],
  werkplek: ["de", "werkplekken"],
  aanleiding: ["de", "aanleidingen"],
  verantwoordelijkheid: ["de", "verantwoordelijkheden"],
  gewoonte: ["de", "gewoontes / gewoonten"],
  samenleving: ["de", "samenlevingen"],
  verbetering: ["de", "verbeteringen"],
  voorwaarde: ["de", "voorwaarden"],
  gevolg: ["het", "gevolgen"],
  aanvraag: ["de", "aanvragen"],
  ontwikkeling: ["de", "ontwikkelingen"],
  mening: ["de", "meningen"],
  onderhandeling: ["de", "onderhandelingen"],
  belemmering: ["de", "belemmeringen"],
  betrekking: ["de", "betrekkingen"],
  samenhang: ["de", "samenhangen"],
  veronderstelling: ["de", "veronderstellingen"],
  voorziening: ["de", "voorzieningen"],
  tegenstrijdigheid: ["de", "tegenstrijdigheden"],
  invalshoek: ["de", "invalshoeken"],
  neiging: ["de", "neigingen"],
  wisselwerking: ["de", "wisselwerkingen"],
  beweegreden: ["de", "beweegredenen"],
  terughoudendheid: ["de", "terughoudendheden"],
  draagwijdte: ["de", "draagwijdtes"],
  nuancering: ["de", "nuanceringen"],
  afweging: ["de", "afwegingen"],
  totstandkoming: ["de", "totstandkomingen"],
  weerbaarheid: ["de", "weerbaarheden"],
  verantwoording: ["de", "verantwoordingen"]
};

const EXAMPLE_TRANSLATIONS = {
  "Ik vraag vandaag een verblijfsdocument aan.": "我今天申请一份居留文件。",
  "Zij vroeg vorige week een nieuw paspoort aan.": "她上周申请了一本新护照。",
  "We hebben de subsidie online aangevraagd.": "我们已经在线申请了补贴。",
  "Ik verhuis in juni naar Leiden.": "我六月搬到莱顿。",
  "Wij verhuisden vorig jaar naar een groter huis.": "我们去年搬到了一所更大的房子。",
  "Zij is naar Rotterdam verhuisd.": "她已经搬到鹿特丹了。",
  "Ik controleer mijn antwoorden.": "我检查我的答案。",
  "De docent controleerde de formulieren.": "老师检查了这些表格。",
  "Heb je de datum gecontroleerd?": "你检查日期了吗？",
  "Ik bevestig de afspraak per e-mail.": "我通过邮件确认预约。",
  "De medewerker bevestigde mijn reservering.": "工作人员确认了我的预订。",
  "De betaling is bevestigd.": "付款已经确认。",
  "Ik pas mijn planning aan.": "我调整我的计划。",
  "Zij paste haar tekst gisteren aan.": "她昨天修改了她的文本。",
  "We hebben het rooster aangepast.": "我们已经调整了日程表。",
  "Ik twijfel over mijn keuze.": "我对自己的选择犹豫。",
  "Hij twijfelde aan het antwoord.": "他怀疑这个答案。",
  "We hebben lang getwijfeld.": "我们犹豫了很久。",
  "Ik bespreek het probleem met mijn collega.": "我和同事讨论这个问题。",
  "We bespraken de resultaten gisteren.": "我们昨天讨论了结果。",
  "Het voorstel is besproken.": "这个提案已经讨论过了。",
  "Stress beïnvloedt mijn slaap.": "压力影响我的睡眠。",
  "Het weer beïnvloedde de planning.": "天气影响了计划。",
  "Zijn mening is door de cijfers beïnvloed.": "他的看法受到了这些数字的影响。",
  "Ik ondersteun nieuwe studenten.": "我支持新学生。",
  "De gemeente ondersteunde het project.": "市政府支持了这个项目。",
  "Wij worden goed ondersteund.": "我们得到了很好的支持。",
  "Ik vergelijk de prijzen.": "我比较价格。",
  "Zij vergeleek twee opleidingen.": "她比较了两个专业/培训。",
  "We hebben de opties vergeleken.": "我们已经比较了这些选项。",
  "Ik sta geen fouten in het formulier toe.": "我不允许表格里有错误。",
  "De school stond telefoons niet toe.": "学校不允许使用手机。",
  "Roken is hier niet toegestaan.": "这里不允许吸烟。",
  "Ik benadruk het verschil.": "我强调这个区别。",
  "De docent benadrukte de uitspraak.": "老师强调了发音。",
  "Het belang is vaak benadrukt.": "其重要性经常被强调。",
  "Ik veronderstel dat je akkoord gaat.": "我假设你同意。",
  "Men veronderstelde dat de data klopten.": "人们曾假设这些数据是正确的。",
  "Dat werd lang verondersteld.": "这一点长期以来被这样假设。",
  "Ik voer de opdracht uit.": "我执行这个任务。",
  "Het team voerde het plan uit.": "团队执行了这个计划。",
  "De controle is uitgevoerd.": "检查已经执行完了。",
  "Ik onderbouw mijn mening met voorbeelden.": "我用例子支撑我的观点。",
  "Zij onderbouwde haar argument goed.": "她很好地论证了自己的论点。",
  "De conclusie is met cijfers onderbouwd.": "这个结论有数据支撑。",
  "Ik toon het verschil aan.": "我证明这个区别。",
  "Het onderzoek toonde het effect aan.": "研究证明了这个效果。",
  "Dat is duidelijk aangetoond.": "那已经被清楚地证明了。",
  "Ik streef een hoger niveau na.": "我追求更高的水平。",
  "Zij streefde meer vrijheid na.": "她追求更多自由。",
  "Dat doel is jarenlang nagestreefd.": "这个目标被追求了多年。",
  "Ik zet mijn standpunt uiteen.": "我阐述我的立场。",
  "De spreker zette het probleem helder uiteen.": "演讲者清楚地阐述了这个问题。",
  "De regels zijn duidelijk uiteengezet.": "这些规则已经被清楚说明。",
  "Ik weerleg dat argument.": "我反驳那个论点。",
  "Zij weerlegde de kritiek met cijfers.": "她用数据反驳了批评。",
  "De bewering is weerlegd.": "这个说法已经被反驳。",
  "Ik veranker de afspraak in het contract.": "我把这个约定写入合同中固定下来。",
  "De wet verankerde deze rechten.": "法律固定了这些权利。",
  "De regel is juridisch verankerd.": "这条规则已经在法律上被固定。",
  "Ik bepleit een praktische oplossing.": "我主张一个实际的解决方案。",
  "De auteur bepleitte een strengere aanpak.": "作者主张采取更严格的方法。",
  "Die maatregel is vaak bepleit.": "那项措施经常被倡导。",
  "Dit impliceert extra werk.": "这意味着额外工作。",
  "Zijn antwoord impliceerde twijfel.": "他的回答暗示了怀疑。",
  "Dat werd niet geïmpliceerd.": "那并没有被暗示。"
};

let dutchVoice = null;
let currentAudio = null;
let audioNoticeTimer = null;
let lastPronunciationText = "";

const state = {
  view: "learn",
  level: "all",
  currentIndex: 0,
  quizWord: null,
  quizQueue: [],
  quizIndex: 0,
  quizCompleted: false,
  quizMode: "meaning",
  quizAnswered: false,
  extraPractice: false,
  progress: loadProgress()
};

const ALL_WORDS = mergeWordBanks();
const FREE_WORDS = buildFreeWords();

function mergeWordBanks() {
  const words = [];
  const seen = new Set();
  [...WORDS, ...(window.EXTRA_WORDS || [])].forEach((word) => {
    const key = `${word.level}|${word.nl.toLowerCase()}`;
    if (seen.has(key)) return;
    seen.add(key);
    words.push(word);
  });
  return words;
}

function buildFreeWords() {
  return ALL_WORDS.filter((word) => word.level === "A1").slice(0, FREE_WORD_LIMIT);
}

function isPro() {
  return Boolean(state.progress.pro?.unlocked);
}

function availableWords() {
  return isPro() ? ALL_WORDS : FREE_WORDS;
}

function normalizeCode(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function codeHash(value) {
  let hash = 2166136261;
  for (const char of normalizeCode(value)) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36).toUpperCase();
}

function unlockPro(code) {
  state.progress.pro = { unlocked: true, code: normalizeCode(code), unlockedAt: new Date().toISOString() };
  state.level = "all";
  state.currentIndex = 0;
  saveProgress();
  renderLicense("解锁成功，完整 Pro 已开启。", true);
  renderLearn();
  renderLibrary();
  if (state.view === "quiz") newQuiz("meaning");
}

function renderLicense(message = "", ok = false) {
  const pro = isPro();
  $("licenseTitle").textContent = pro ? "Pro 已解锁" : "免费试用版";
  $("licenseText").textContent = pro
    ? `已开放 ${ALL_WORDS.length} 个 A1-C1 词条、本地单词发音、例句发音和完整检测。`
    : `当前开放 A1 前 ${FREE_WORDS.length} 个试用词。购买 Pro 后解锁 ${ALL_WORDS.length} 个 A1-C1 词条、本地发音、例句发音和完整检测。`;
  $("licenseRow").classList.toggle("hidden", pro);
  $("licenseMessage").textContent = message;
  $("licenseMessage").classList.toggle("ok", ok);
  document.querySelectorAll("#levelFilter option").forEach((option) => {
    option.disabled = !pro && !["all", "A1"].includes(option.value);
  });
  if (!pro && !["all", "A1"].includes(state.level)) {
    state.level = "all";
    $("levelFilter").value = "all";
  }
}

function loadProgress() {
  const fallback = { learned: {}, stats: { total: 0, correct: 0 }, days: {}, goal: 20, lastDay: "", pro: { unlocked: false, code: "", unlockedAt: "" } };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...fallback, ...saved, pro: { ...fallback.pro, ...(saved.pro || {}) } };
  } catch {
    return fallback;
  }
}

function saveProgress() {
  state.progress.lastDay = todayKey;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function learnedTodayCount() {
  return (state.progress.days[todayKey] || []).length;
}

function dailyGoal() {
  return Number(state.progress.goal) || 20;
}

function isDailyGoalDone() {
  return learnedTodayCount() >= dailyGoal();
}

function refreshVoices() {
  if (!("speechSynthesis" in window)) return;
  const voices = speechSynthesis.getVoices();
  dutchVoice =
    voices.find((voice) => /^nl[-_]/i.test(voice.lang) && /Nederlands|Dutch|Vlaams|Xander|Claire|Frank|Google|Microsoft|Siri/i.test(voice.name)) ||
    voices.find((voice) => /^nl[-_]/i.test(voice.lang)) ||
    null;
}

function googleDutchAudioUrls(text) {
  const query = encodeURIComponent(text.slice(0, 190));
  const urls = [
    `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=nl&q=${query}`,
    `https://translate.google.nl/translate_tts?ie=UTF-8&client=tw-ob&tl=nl&q=${query}`,
    `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=nl&q=${query}`
  ];
  if (location.protocol !== "file:") {
    urls.unshift(`/.netlify/functions/tts?text=${query}`);
  }
  return urls;
}

function localDutchAudioUrl(text) {
  const audio = window.LOCAL_AUDIO || {};
  const trimmed = text.trim();
  const variants = [
    trimmed,
    trimmed.replace(/\s+/g, " "),
    trimmed.toLowerCase(),
    capitalizeDutch(trimmed),
    trimmed.replace(/^(de|het)\s+/i, (match) => match.toLowerCase())
  ];
  return variants.map((item) => audio[item]).find(Boolean) || "";
}

function showAudioNotice(message, showFallback = false) {
  const notice = $("audioNotice");
  if (!notice) return;
  notice.textContent = message;
  $("openPronunciation")?.classList.toggle("hidden", !showFallback);
  clearTimeout(audioNoticeTimer);
  audioNoticeTimer = window.setTimeout(() => {
    notice.textContent = "";
    $("openPronunciation")?.classList.add("hidden");
  }, showFallback ? 20000 : 8000);
}

function speakWithSystemVoice(text, rate = 0.84) {
  if (!("speechSynthesis" in window)) {
    showAudioNotice("这个手机浏览器不支持语音播放。");
    return;
  }
  refreshVoices();
  if (!dutchVoice) {
    showAudioNotice("App 内荷兰语发音失败。可以打开荷兰语发音页听官方发音。", true);
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nl-NL";
  utterance.voice = dutchVoice;
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.onerror = () => showAudioNotice("手机系统语音也播放失败。请用 Chrome 打开网页，并确认手机媒体音量已打开。");
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function speak(text, rate = 0.84) {
  lastPronunciationText = text;
  $("openPronunciation")?.classList.add("hidden");
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if ("speechSynthesis" in window) speechSynthesis.cancel();

  const localUrl = localDutchAudioUrl(text);
  const urls = localUrl ? [localUrl, ...googleDutchAudioUrls(text)] : googleDutchAudioUrls(text);
  let index = 0;

  const playOnlineAudio = () => {
    currentAudio = new Audio(urls[index]);
    currentAudio.preload = "auto";
    currentAudio.playbackRate = rate < 0.84 ? 0.95 : 1;
    currentAudio.onerror = () => {
      index += 1;
      if (index < urls.length) {
        playOnlineAudio();
      } else {
        speakWithSystemVoice(text, rate);
      }
    };
    currentAudio.play().catch(() => {
      index += 1;
      if (index < urls.length) {
        playOnlineAudio();
      } else {
        speakWithSystemVoice(text, rate);
      }
    });
  };

  playOnlineAudio();
}

if ("speechSynthesis" in window) {
  refreshVoices();
  speechSynthesis.onvoiceschanged = refreshVoices;
}

function filteredWords() {
  const words = availableWords().filter((word) => state.level === "all" || word.level === state.level);
  return words.length ? words : availableWords();
}

function cleanDutch(value) {
  return value.toLowerCase().normalize("NFC").replace(/^(de|het|een)\s+/i, "").trim();
}

function currentWord() {
  const words = filteredWords();
  return words[state.currentIndex % words.length] || ALL_WORDS[0];
}

function uniqueWords(words) {
  const seen = new Set();
  return words.filter((word) => {
    if (seen.has(word.nl)) return false;
    seen.add(word.nl);
    return true;
  });
}

function todayLearnedWords() {
  const learned = new Set(state.progress.days[todayKey] || []);
  return availableWords().filter((word) => learned.has(word.nl));
}

function quizWords(mode = "meaning") {
  const todayWords = todayLearnedWords();
  if (mode === "dictation") {
    return todayWords.length ? todayWords : filteredWords();
  }

  const todayMeaningWords = todayWords.filter(hasChineseMeaning);
  if (todayMeaningWords.length >= 4) return todayMeaningWords;

  return uniqueWords([
    ...todayMeaningWords,
    ...filteredWords().filter(hasChineseMeaning),
    ...availableWords().filter(hasChineseMeaning)
  ]);
}

function dailyQuizQueue() {
  const todayWords = todayLearnedWords();
  const words = todayWords.length ? todayWords : filteredWords().slice(0, dailyGoal());
  return uniqueWords(words).filter((word) => state.quizMode === "dictation" || hasChineseMeaning(word));
}

function lemmaOf(word) {
  return word.nl.replace(/^(de|het|een)\s+/i, "").trim();
}

function exampleText(word) {
  return typeof word.example === "string" ? word.example : word.example?.nl || "";
}

function exampleTranslation(word) {
  return typeof word.example === "string" ? word.exampleZh || "" : word.exampleZh || word.example?.zh || "";
}

function isGeneratedExample(word) {
  return /^Ik leer het woord "/.test(exampleText(word));
}

function cleanMeaning(word) {
  const cleaned = word.zh
    .replace(/^英文释义：/, "")
    .replace(/^荷兰语释义：/, "")
    .replace(/^[?？\s]+/, "")
    .replace(/。$/, "")
    .trim();
  return cleaned || `“${lemmaOf(word)}”这个词`;
}

function displayMeaning(word) {
  return TRANSLATION_FIXES[word.nl.toLowerCase()] || cleanMeaning(word);
}

function cleanQuizMeaning(value) {
  return value
    .replace(/[（(][^（）()]*[A-Za-zÀ-ÿ][^（）()]*[）)]/g, "")
    .replace(/[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'/-]*/g, "")
    .replace(/\s+/g, "")
    .replace(/[；;、，,。·/]+$/g, "")
    .trim();
}

function hasChineseMeaning(word) {
  const meaning = cleanQuizMeaning(displayMeaning(word));
  return /[\u4e00-\u9fff]/.test(meaning) && !/[A-Za-zÀ-ÿ]/.test(meaning);
}

function quizMeaning(word) {
  return hasChineseMeaning(word) ? cleanQuizMeaning(displayMeaning(word)) : "中文释义待补充";
}

function displayPos(word) {
  if (isNoun(word)) return "名词 / zelfstandig naamwoord";
  if (isVerb(word)) return "动词 / werkwoord";
  if (isAdjective(word)) return "形容词 / bijvoeglijk naamwoord";
  if (word.pos.includes("woord")) return "其他 / woord";
  return word.pos;
}

function isVerb(word) {
  return word.pos.includes("werkwoord") || VERB_PHRASES.has(word.nl.toLowerCase());
}

function isNoun(word) {
  if (isVerb(word) || PHRASES.has(word.nl.toLowerCase())) return false;
  return word.pos.includes("zelfstandig naamwoord") || /^(de|het)\s+/i.test(word.nl);
}

function isAdjective(word) {
  const meaning = displayMeaning(word);
  return word.pos.includes("bijvoeglijk naamwoord") || (!isNoun(word) && !isVerb(word) && /的|害怕|高兴|生气|苦|宽|日常|金发|出汗/.test(meaning));
}

function articleOf(word) {
  const lowerWord = word.nl.toLowerCase();
  return lowerWord.startsWith("het ") ? "het" : lowerWord.startsWith("de ") ? "de" : "";
}

function capitalizeDutch(value) {
  return value ? value[0].toUpperCase() + value.slice(1) : value;
}

function guessPlural(lemma) {
  if (/[aeiou]$/i.test(lemma)) return `${lemma}s`;
  if (/(el|er|en)$/i.test(lemma)) return `${lemma}s`;
  return `${lemma}en`;
}

const VERB_PHRASES = new Set(["de planten water geven"]);
const PHRASES = new Set(["het is één uur.", "het is..."]);
const TRANSLATION_FIXES = {
  "de aarde": "土；泥土；地球",
  "de dag": "一天；白天",
  "de jongen": "男孩",
  "de jurk": "连衣裙",
  "de mevrouw": "女士；夫人",
  "de plant": "植物",
  "de rug": "背；背部",
  "de sinaasappel": "橙子",
  "het voetbal": "足球",
  "de bakker": "面包师；面包店",
  "de muis": "老鼠；鼠标",
  "de pot": "锅；罐子",
  "de kaart": "卡片；地图；票",
  "de bank": "沙发；银行",
  "de buik": "肚子",
  "de eigenaar": "主人；所有者",
  "de huisbaas": "房东",
  "de richting": "方向",
  "de rust": "安静；休息",
  "het medicijn": "药",
  "het symptoom": "症状"
};

const SEMANTIC_EXAMPLES = {
  "'s avonds": [["'s Avonds kook ik thuis.", "晚上我在家做饭。"], ["Ik kijk 's avonds een film.", "我晚上看一部电影。"], ["'s Avonds is het rustig op straat.", "晚上街上很安静。"]],
  "'s middags": [["'s Middags eet ik een broodje.", "下午我吃一个面包。"], ["Wij hebben 's middags les.", "我们下午有课。"], ["'s Middags drink ik koffie.", "下午我喝咖啡。"]],
  "'s morgens": [["'s Morgens fiets ik naar school.", "早上我骑车去学校。"], ["Ik drink 's morgens koffie.", "我早上喝咖啡。"], ["'s Morgens is de markt open.", "早上市场开门。"]],
  "'s nachts": [["'s Nachts slaap ik meestal goed.", "晚上我通常睡得很好。"], ["De bus rijdt 's nachts niet.", "公交车晚上不运行。"], ["'s Nachts is het buiten donker.", "夜里外面很黑。"]],
  aaien: [["Ik aai de hond voorzichtig.", "我轻轻地抚摸狗。"], ["Het kind aait de kat.", "孩子抚摸猫。"], ["Mag ik je hond aaien?", "我可以摸摸你的狗吗？"]],
  aanbieden: [["Hij biedt mij koffie aan.", "他给我提供咖啡。"], ["De winkel biedt korting aan.", "商店提供折扣。"], ["Ik bied mijn hulp aan.", "我提供我的帮助。"]],
  aangenaam: [["Aangenaam, ik ben Li.", "很高兴认识你，我是李。"], ["Het gesprek is aangenaam.", "这次谈话很愉快。"], ["Zij heeft een aangename stem.", "她的声音很悦耳。"]],
  aankomen: [["De trein komt om acht uur aan.", "火车八点到达。"], ["Wij komen morgen in Amsterdam aan.", "我们明天到达阿姆斯特丹。"], ["Wanneer kom je thuis aan?", "你什么时候到家？"]],
  aanzetten: [["Ik zet de lamp aan.", "我打开灯。"], ["Kun je de computer aanzetten?", "你能打开电脑吗？"], ["Zij zet de oven aan.", "她打开烤箱。"]],
  acht: [["Ik heb acht euro.", "我有八欧元。"], ["De les begint om acht uur.", "课八点开始。"], ["Er zitten acht studenten in de klas.", "班里有八个学生。"]],
  aftrekken: [["Acht min drie is vijf.", "八减三等于五。"], ["Je moet twee euro aftrekken.", "你要减去两欧元。"], ["Wij leren optellen en aftrekken.", "我们学习加法和减法。"]],
  afwassen: [["Ik was na het eten af.", "饭后我洗碗。"], ["Wie wast vandaag af?", "今天谁洗碗？"], ["De borden staan klaar om af te wassen.", "盘子准备好要洗了。"]],
  antwoorden: [["Ik geef antwoord op de vraag.", "我回答这个问题。"], ["Kun je in het Nederlands antwoorden?", "你能用荷兰语回答吗？"], ["De antwoorden staan op papier.", "答案写在纸上。"]],
  april: [["In april begint de lente.", "四月春天开始。"], ["Mijn afspraak is in april.", "我的预约在四月。"], ["April is vaak fris in Nederland.", "荷兰的四月常常有点冷。"]],
  augustus: [["In augustus ga ik op vakantie.", "八月我去度假。"], ["Augustus is een zomermaand.", "八月是夏季月份。"], ["Wij verhuizen in augustus.", "我们八月搬家。"]],
  bakken: [["Ik bak brood in de oven.", "我在烤箱里烤面包。"], ["Zij bakt een taart.", "她烤一个蛋糕。"], ["We bakken aardappels in de pan.", "我们在锅里煎土豆。"]],
  bang: [["Het kind is bang voor de hond.", "孩子害怕狗。"], ["Ik ben niet bang.", "我不害怕。"], ["Ben je bang in het donker?", "你怕黑吗？"]],
  beginnen: [["De les begint om negen uur.", "课九点开始。"], ["Ik begin vandaag met Nederlands.", "我今天开始学荷兰语。"], ["Wanneer begint de film?", "电影什么时候开始？"]],
  "belgië": [["België ligt naast Nederland.", "比利时在荷兰旁边。"], ["Wij gaan dit weekend naar België.", "我们这个周末去比利时。"], ["In België spreken veel mensen Nederlands.", "在比利时很多人说荷兰语。"]],
  bestellen: [["Ik bestel koffie in het café.", "我在咖啡馆点咖啡。"], ["Wij bestellen pizza online.", "我们在线订披萨。"], ["Mag ik een broodje bestellen?", "我可以点一个面包吗？"]],
  betalen: [["Ik betaal met mijn pinpas.", "我用银行卡付款。"], ["Waar kan ik betalen?", "我在哪里可以付款？"], ["Zij betaalt de rekening.", "她付账单。"]],
  "beterschap!": [["Beterschap, ik hoop dat je snel beter wordt.", "祝你早日康复，希望你快点好起来。"], ["Ik stuur een kaart: beterschap!", "我寄一张卡片：祝早日康复！"], ["De dokter zegt: beterschap.", "医生说：祝你早日康复。"]],
  bevallen: [["De nieuwe kamer bevalt mij goed.", "我很喜欢这个新房间。"], ["Hoe bevalt je cursus?", "你的课程感觉怎么样？"], ["Deze jas bevalt me niet.", "我不喜欢这件外套。"]],
  bewegen: [["Ik beweeg elke dag een uur.", "我每天运动一小时。"], ["De baby beweegt veel.", "宝宝动得很多。"], ["Je moet meer bewegen voor je gezondheid.", "为了健康你应该多运动。"]],
  bezweet: [["Na het sporten ben ik bezweet.", "运动后我满身是汗。"], ["Hij komt bezweet binnen.", "他满身是汗地进来。"], ["Mijn shirt is bezweet.", "我的衬衫汗湿了。"]],
  binnenkomen: [["Kom maar binnen.", "请进来。"], ["De docent komt de klas binnen.", "老师走进教室。"], ["Ik kom om acht uur binnen.", "我八点进来。"]],
  bitter: [["De koffie smaakt bitter.", "咖啡尝起来很苦。"], ["Dit medicijn is bitter.", "这个药很苦。"], ["Ik hou niet van bittere thee.", "我不喜欢苦茶。"]],
  blauw: [["De lucht is blauw.", "天空是蓝色的。"], ["Ik draag een blauwe jas.", "我穿一件蓝色外套。"], ["Mijn fiets is blauw.", "我的自行车是蓝色的。"]],
  blij: [["Ik ben blij met mijn nieuwe baan.", "我对新工作很开心。"], ["Zij is blij vandaag.", "她今天很高兴。"], ["Ik word blij van muziek.", "音乐让我开心。"]],
  blijven: [["Ik blijf vandaag thuis.", "我今天留在家。"], ["Blijf hier even wachten.", "在这里等一下。"], ["Wij blijven twee dagen in Utrecht.", "我们在乌得勒支待两天。"]],
  blond: [["Hij heeft blond haar.", "他有金发。"], ["Mijn dochter is blond.", "我的女儿是金发。"], ["De blonde jongen staat daar.", "那个金发男孩站在那里。"]],
  boksen: [["Hij bokst elke vrijdag.", "他每周五拳击。"], ["Wij leren boksen in de sportschool.", "我们在健身房学拳击。"], ["Boksen is een zware sport.", "拳击是一项很累的运动。"]],
  "boodschappen doen": [["Ik doe boodschappen op de markt.", "我在市场买东西。"], ["Wij doen zaterdag boodschappen.", "我们周六购物。"], ["Na het werk doe ik boodschappen.", "下班后我买菜。"]],
  boos: [["De klant is boos.", "顾客很生气。"], ["Ik ben boos omdat de bus te laat is.", "我生气是因为公交车晚点了。"], ["Waarom ben je boos?", "你为什么生气？"]],
  breed: [["De straat is breed.", "这条街很宽。"], ["Wij hebben een breed bed.", "我们有一张宽床。"], ["De tafel is breed genoeg.", "桌子够宽。"]],
  brengen: [["Ik breng mijn dochter naar school.", "我送女儿去学校。"], ["Kun je het boek brengen?", "你能把书带来吗？"], ["Hij brengt bloemen mee.", "他带来了花。"]],
  bruin: [["Ik draag bruine schoenen.", "我穿棕色鞋子。"], ["De tafel is bruin.", "桌子是棕色的。"], ["Mijn hond is bruin.", "我的狗是棕色的。"]],
  dagelijks: [["Ik oefen dagelijks Nederlands.", "我每天练习荷兰语。"], ["Zij neemt dagelijks de bus.", "她每天坐公交。"], ["Dagelijks wandelen is gezond.", "每天散步很健康。"]],
  dansen: [["Wij dansen op muziek.", "我们跟着音乐跳舞。"], ["Zij danst graag.", "她喜欢跳舞。"], ["Op het feest dansen veel mensen.", "聚会上很多人在跳舞。"]],
  aardappel: [["Ik kook aardappels voor het avondeten.", "我晚饭煮土豆。"], ["De aardappel ligt in de pan.", "土豆在锅里。"], ["Wij eten aardappels met groente.", "我们吃土豆配蔬菜。"]],
  aarde: [["De plant staat in de aarde.", "植物种在土里。"], ["Mijn schoenen zitten vol aarde.", "我的鞋上都是土。"], ["De aarde is nat na de regen.", "雨后泥土是湿的。"]],
  achternaam: [["Wat is je achternaam?", "你姓什么？"], ["Mijn achternaam staat op het formulier.", "我的姓写在表格上。"], ["Schrijf eerst je voornaam en achternaam.", "先写你的名和姓。"]],
  acteur: [["De acteur speelt in een film.", "演员出演一部电影。"], ["Mijn broer wil acteur worden.", "我哥哥想成为演员。"], ["De acteur staat op het podium.", "演员站在舞台上。"]],
  actrice: [["De actrice speelt goed.", "女演员演得很好。"], ["Zij is een bekende actrice.", "她是一位有名的女演员。"], ["De actrice praat met de journalist.", "女演员和记者交谈。"]],
  advocaat: [["De advocaat helpt de familie.", "律师帮助这个家庭。"], ["Ik heb morgen een afspraak met de advocaat.", "我明天和律师有预约。"], ["De advocaat leest het contract.", "律师阅读合同。"]],
  afwasmachine: [["De afwasmachine staat in de keuken.", "洗碗机在厨房里。"], ["Ik zet de afwasmachine aan.", "我打开洗碗机。"], ["De borden gaan in de afwasmachine.", "盘子放进洗碗机。"]],
  apotheek: [["Ik koop medicijnen bij de apotheek.", "我在药房买药。"], ["De apotheek is naast de huisarts.", "药房在家庭医生旁边。"], ["Is de apotheek vandaag open?", "药房今天开门吗？"]],
  appel: [["Ik eet een appel.", "我吃一个苹果。"], ["De appel ligt op tafel.", "苹果在桌上。"], ["Wil je een rode appel?", "你想要一个红苹果吗？"]],
  arm: [["Mijn arm doet pijn.", "我的手臂疼。"], ["Hij breekt zijn arm.", "他摔断了手臂。"], ["Ik draag de tas aan mijn arm.", "我把包挂在手臂上。"]],
  auto: [["De auto staat voor het huis.", "汽车停在房子前面。"], ["Ik ga met de auto naar werk.", "我开车去上班。"], ["Mijn auto is blauw.", "我的车是蓝色的。"]],
  avond: [["Vanavond eet ik thuis.", "今晚我在家吃饭。"], ["De avond is rustig.", "晚上很安静。"], ["Wij gaan morgenavond naar de film.", "我们明晚去看电影。"]],
  baard: [["Mijn vader heeft een baard.", "我爸爸有胡子。"], ["Hij scheert zijn baard.", "他刮胡子。"], ["De man met de baard is mijn oom.", "那个有胡子的男人是我叔叔。"]],
  badkamer: [["De douche is in de badkamer.", "淋浴在浴室里。"], ["Ik poets mijn tanden in de badkamer.", "我在浴室刷牙。"], ["De badkamer is schoon.", "浴室很干净。"]],
  bakker: [["Ik koop brood bij de bakker.", "我在面包店买面包。"], ["De bakker bakt brood.", "面包师烤面包。"], ["De bakker is vroeg open.", "面包店很早开门。"]],
  banaan: [["Ik eet een banaan als ontbijt.", "我早餐吃一根香蕉。"], ["De banaan is geel.", "香蕉是黄色的。"], ["Mijn kind wil een banaan.", "我的孩子想要一根香蕉。"]],
  bank: [["Ik zit op de bank.", "我坐在沙发上。"], ["De bank staat in de woonkamer.", "沙发在客厅里。"], ["Wij kijken film op de bank.", "我们坐在沙发上看电影。"]],
  bar: [["Wij drinken iets aan de bar.", "我们在吧台喝点东西。"], ["De bar is druk vanavond.", "今晚酒吧很忙。"], ["Hij werkt in een bar.", "他在酒吧工作。"]],
  bestuurder: [["De bestuurder stopt bij de halte.", "司机在车站停下。"], ["De bestuurder rijdt voorzichtig.", "司机开车很小心。"], ["Ik groet de bestuurder in de bus.", "我向公交司机打招呼。"]],
  bibliotheek: [["Ik leen een boek in de bibliotheek.", "我在图书馆借一本书。"], ["De bibliotheek is stil.", "图书馆很安静。"], ["Wij studeren in de bibliotheek.", "我们在图书馆学习。"]],
  bioscoop: [["Wij kijken een film in de bioscoop.", "我们在电影院看电影。"], ["De bioscoop is naast het station.", "电影院在车站旁边。"], ["Ik koop kaartjes voor de bioscoop.", "我买电影院票。"]],
  bloem: [["De bloem staat in een vaas.", "花在花瓶里。"], ["Ik geef mijn moeder een bloem.", "我送妈妈一朵花。"], ["De bloem ruikt lekker.", "花闻起来很香。"]],
  bloes: [["Zij draagt een witte bloes.", "她穿一件白色衬衫。"], ["De bloes hangt in de kast.", "衬衫挂在柜子里。"], ["Deze bloes past goed.", "这件衬衫很合身。"]],
  boodschappenlijst: [["Melk staat op de boodschappenlijst.", "牛奶在购物清单上。"], ["Ik maak een boodschappenlijst.", "我写一张购物清单。"], ["Zonder boodschappenlijst vergeet ik veel.", "没有购物清单我会忘很多东西。"]],
  boom: [["De boom staat in de tuin.", "树在花园里。"], ["Onder de boom is schaduw.", "树下有阴凉。"], ["In de herfst verliest de boom bladeren.", "秋天树会落叶。"]],
  boot: [["De boot vaart op het water.", "船在水上行驶。"], ["Wij nemen de boot naar het eiland.", "我们坐船去岛上。"], ["De boot vertrekt om tien uur.", "船十点出发。"]],
  boter: [["Ik smeer boter op brood.", "我把黄油涂在面包上。"], ["De boter staat in de koelkast.", "黄油在冰箱里。"], ["Voor de taart heb ik boter nodig.", "做蛋糕我需要黄油。"]],
  brandweerman: [["De brandweerman blust de brand.", "消防员灭火。"], ["Mijn buurman is brandweerman.", "我的邻居是消防员。"], ["De brandweerman helpt snel.", "消防员迅速帮忙。"]],
  bril: [["Ik draag een bril om te lezen.", "我戴眼镜看书。"], ["Mijn bril ligt op tafel.", "我的眼镜在桌上。"], ["Zonder bril zie ik niet goed.", "不戴眼镜我看不清。"]],
  broek: [["Ik draag vandaag een zwarte broek.", "我今天穿黑色裤子。"], ["De broek is te lang.", "裤子太长了。"], ["Deze broek past goed.", "这条裤子很合身。"]],
  broer: [["Mijn broer woont in Rotterdam.", "我哥哥住在鹿特丹。"], ["Ik bel mijn broer.", "我给哥哥打电话。"], ["Mijn broer werkt vandaag.", "我哥哥今天上班。"]],
  buik: [["Mijn buik doet pijn.", "我的肚子疼。"], ["Na het eten is mijn buik vol.", "饭后我的肚子饱了。"], ["De dokter kijkt naar mijn buik.", "医生检查我的肚子。"]],
  bus: [["Ik neem de bus naar school.", "我坐公交去学校。"], ["De bus komt over vijf minuten.", "公交车五分钟后到。"], ["De bus stopt bij de halte.", "公交车在车站停。"]],
  caissière: [["De caissière scant de boodschappen.", "收银员扫描商品。"], ["Ik betaal bij de caissière.", "我在收银员那里付款。"], ["De caissière geeft mij de bon.", "收银员给我小票。"]],
  cirkel: [["Teken een cirkel op papier.", "在纸上画一个圆。"], ["De tafel heeft de vorm van een cirkel.", "桌子是圆形的。"], ["Zet een cirkel om het goede antwoord.", "把正确答案圈出来。"]],
  dag: [["Vandaag is een drukke dag.", "今天是忙碌的一天。"], ["Ik werk vijf dagen per week.", "我每周工作五天。"], ["Fijne dag!", "祝你今天愉快！"]],
  dans: [["De dans begint om acht uur.", "舞蹈八点开始。"], ["Ik leer een nieuwe dans.", "我学一个新舞蹈。"], ["De dans is vrolijk.", "这个舞蹈很欢快。"]],
  agenda: [["Mijn afspraak staat in de agenda.", "我的预约写在日程本里。"], ["Ik kijk elke ochtend in mijn agenda.", "我每天早上看日程。"], ["De vergadering staat op de agenda.", "会议在议程上。"]],
  datum: [["Wat is de datum vandaag?", "今天是几号？"], ["Schrijf de datum bovenaan het formulier.", "把日期写在表格上方。"], ["De afspraak heeft een nieuwe datum.", "预约有了新的日期。"]],
  dorst: [["Ik heb dorst na het fietsen.", "骑车后我口渴。"], ["Heb je dorst? Neem wat water.", "你口渴吗？喝点水。"], ["Door de hitte krijg ik snel dorst.", "天气热我很容易口渴。"]],
  feestdag: [["Op een feestdag zijn veel winkels dicht.", "节假日很多商店关门。"], ["Kerstmis is een feestdag.", "圣诞节是节假日。"], ["Wij hebben vrij op deze feestdag.", "这个节假日我们休息。"]],
  gezondheid: [["Gezondheid is belangrijk.", "健康很重要。"], ["Ik sport voor mijn gezondheid.", "我为了健康运动。"], ["De dokter vraagt naar mijn gezondheid.", "医生询问我的健康状况。"]],
  griep: [["Ik heb griep en blijf thuis.", "我得了流感，待在家里。"], ["Bij griep moet je veel drinken.", "流感时要多喝水。"], ["Mijn dochter heeft deze week griep.", "我女儿这周得了流感。"]],
  groente: [["Ik eet elke dag groente.", "我每天吃蔬菜。"], ["De groente ligt in de koelkast.", "蔬菜在冰箱里。"], ["Op de markt koop ik verse groente.", "我在市场买新鲜蔬菜。"]],
  herfst: [["In de herfst vallen de bladeren.", "秋天树叶会落下。"], ["De herfst begint in september.", "秋天从九月开始。"], ["In de herfst draag ik een jas.", "秋天我穿外套。"]],
  honger: [["Ik heb honger na school.", "放学后我饿了。"], ["Heb je honger? Er is brood.", "你饿了吗？有面包。"], ["Door de lange reis krijg ik honger.", "长途旅行让我饿了。"]],
  kalender: [["De verjaardag staat op de kalender.", "生日写在日历上。"], ["Ik hang de kalender aan de muur.", "我把日历挂在墙上。"], ["Op de kalender zie ik alle maanden.", "我在日历上看到所有月份。"]],
  koorts: [["Het kind heeft koorts.", "孩子发烧了。"], ["Bij koorts bel ik de dokter.", "发烧时我打电话给医生。"], ["Mijn temperatuur is hoog; ik heb koorts.", "我的体温很高，我发烧了。"]],
  lente: [["In de lente bloeien de bloemen.", "春天花开。"], ["De lente begint in maart.", "春天从三月开始。"], ["In de lente fiets ik graag buiten.", "春天我喜欢在外面骑车。"]],
  pijn: [["Ik heb pijn in mijn arm.", "我的手臂疼。"], ["Waar heb je pijn?", "你哪里疼？"], ["De pijn wordt minder na het medicijn.", "吃药后疼痛减轻了。"]],
  rust: [["Ik heb rust nodig na het werk.", "下班后我需要休息。"], ["In de bibliotheek is veel rust.", "图书馆里很安静。"], ["Zondag neem ik rust.", "周日我休息。"]],
  vakantie: [["In de vakantie ga ik naar België.", "假期我去比利时。"], ["Wij hebben twee weken vakantie.", "我们有两周假期。"], ["Tijdens de vakantie leer ik Nederlands.", "假期里我学荷兰语。"]],
  vis: [["Ik eet vis met aardappels.", "我吃鱼配土豆。"], ["De vis ligt in de pan.", "鱼在锅里。"], ["Mijn vader koopt vis op de markt.", "我爸爸在市场买鱼。"]],
  week: [["Een week heeft zeven dagen.", "一周有七天。"], ["Volgende week heb ik een afspraak.", "下周我有一个预约。"], ["Ik werk vier dagen per week.", "我每周工作四天。"]],
  winter: [["In de winter is het koud.", "冬天很冷。"], ["In de winter draag ik handschoenen.", "冬天我戴手套。"], ["De winter begint in december.", "冬天从十二月开始。"]],
  yoghurt: [["Ik eet yoghurt bij het ontbijt.", "早餐我吃酸奶。"], ["De yoghurt staat in de koelkast.", "酸奶在冰箱里。"], ["Wil je yoghurt met fruit?", "你想要水果酸奶吗？"]],
  zomer: [["In de zomer is het warm.", "夏天很热。"], ["Wij gaan in de zomer op vakantie.", "我们夏天去度假。"], ["In de zomer drink ik veel water.", "夏天我喝很多水。"]],
  basketbal: [["Wij spelen basketbal in de gymzaal.", "我们在体育馆打篮球。"], ["Basketbal is een teamsport.", "篮球是一项团队运动。"], ["Mijn broer kijkt graag naar basketbal.", "我哥哥喜欢看篮球。"]],
  "contant geld": [["Ik betaal met contant geld.", "我用现金付款。"], ["Heb je contant geld bij je?", "你身上有现金吗？"], ["De winkel accepteert geen contant geld.", "这家店不收现金。"]],
  fruit: [["Ik eet fruit als ontbijt.", "我早餐吃水果。"], ["Appels en bananen zijn fruit.", "苹果和香蕉是水果。"], ["Het fruit ligt in de kom.", "水果在碗里。"]],
  geld: [["Ik heb geld nodig voor de bus.", "我需要钱坐公交。"], ["Het geld zit in mijn portemonnee.", "钱在我的钱包里。"], ["Ik spaar geld voor vakantie.", "我为假期存钱。"]],
  medicijn: [["Ik neem het medicijn na het eten.", "我饭后吃药。"], ["Het medicijn helpt tegen de pijn.", "这种药缓解疼痛。"], ["De apotheek geeft mij het medicijn.", "药房给我药。"]],
  symptoom: [["Koorts is een symptoom van griep.", "发烧是流感的一个症状。"], ["Vertel de dokter je symptomen.", "告诉医生你的症状。"], ["Hoofdpijn kan een symptoom zijn.", "头痛可能是一个症状。"]],
  tennis: [["Wij spelen tennis op zaterdag.", "我们周六打网球。"], ["Tennis speel je met een racket.", "打网球要用球拍。"], ["Mijn vriend kijkt graag naar tennis.", "我朋友喜欢看网球。"]],
  vlees: [["Ik eet vandaag geen vlees.", "我今天不吃肉。"], ["Het vlees ligt in de koelkast.", "肉在冰箱里。"], ["De kok bakt het vlees in de pan.", "厨师在锅里煎肉。"]],
  voetbal: [["Wij spelen voetbal in het park.", "我们在公园踢足球。"], ["Voetbal is populair in Nederland.", "足球在荷兰很受欢迎。"], ["Mijn broer kijkt naar voetbal.", "我哥哥看足球。"]],
  weekend: [["In het weekend slaap ik langer.", "周末我睡得更久。"], ["Wij doen boodschappen in het weekend.", "我们周末买东西。"], ["Het weekend begint op vrijdagavond.", "周末从周五晚上开始。"]],
  "planten water geven": [["Ik geef de planten water.", "我给植物浇水。"], ["Kun jij morgen de planten water geven?", "你明天能给植物浇水吗？"], ["In de zomer geef ik de planten elke dag water.", "夏天我每天给植物浇水。"]],
  plant: [["De plant staat bij het raam.", "植物在窗边。"], ["Ik geef de plant water.", "我给植物浇水。"], ["Deze plant heeft veel licht nodig.", "这株植物需要很多光。"]],
  sinaasappel: [["Ik pers een sinaasappel voor sap.", "我榨一个橙子做果汁。"], ["De sinaasappel is zoet.", "橙子很甜。"], ["Ik neem een sinaasappel mee naar school.", "我带一个橙子去学校。"]]
};

function generatedExamples(word) {
  const lemma = lemmaOf(word);
  const semantic = SEMANTIC_EXAMPLES[lemma.toLowerCase()];
  if (semantic) return semantic;
  const article = articleOf(word);
  const noun = article ? `${article} ${lemma}` : lemma;
  const meaning = cleanMeaning(word);

  if (isNoun(word)) {
    return pickByWord(word, [
      [
        [`Ik zie ${article ? noun : `een ${lemma}`} op tafel.`, `我在桌上看到${meaning}。`],
        [`Waar is ${article ? noun : `de ${lemma}`}?`, `${meaning}在哪里？`],
        [`Dit is ${article ? noun : `een ${lemma}`}.`, `这是${meaning}。`]
      ],
      [
        [`${capitalizeDutch(article ? noun : `de ${lemma}`)} ligt in mijn tas.`, `${meaning}在我的包里。`],
        [`Ik gebruik ${article ? noun : `de ${lemma}`} vandaag.`, `我今天使用${meaning}。`],
        [`Heb jij ${article ? noun : `een ${lemma}`}?`, `你有${meaning}吗？`]
      ],
      [
        [`We praten over ${article ? noun : `de ${lemma}`}.`, `我们谈论${meaning}。`],
        [`Ik zoek ${article ? noun : `een ${lemma}`}.`, `我在找${meaning}。`],
        [`${capitalizeDutch(article ? noun : `de ${lemma}`)} is belangrijk.`, `${meaning}很重要。`]
      ]
    ]);
  }

  if (isVerb(word)) {
    return pickByWord(word, [
      [
        [`Ik wil vandaag ${lemma}.`, `我今天想${meaning}。`],
        [`Wij gaan morgen ${lemma}.`, `我们明天要${meaning}。`],
        [`Kun jij ook ${lemma}?`, `你也会${meaning}吗？`]
      ],
      [
        [`Ik leer om te ${lemma}.`, `我学习如何${meaning}。`],
        [`Zij moet nu ${lemma}.`, `她现在必须${meaning}。`],
        [`We kunnen samen ${lemma}.`, `我们可以一起${meaning}。`]
      ],
      [
        [`Vandaag oefen ik: ${lemma}.`, `今天我练习：${meaning}。`],
        [`Hij probeert te ${lemma}.`, `他尝试${meaning}。`],
        [`Ik vind ${lemma} nuttig.`, `我觉得${meaning}很有用。`]
      ]
    ]);
  }

  if (isAdjective(word)) {
    return pickByWord(word, [
      [
        [`Ik ben vandaag ${lemma}.`, `我今天很${meaning}。`],
        [`Dat voelt ${lemma}.`, `那感觉很${meaning}。`],
        [`Het is een ${lemma} moment.`, `这是一个${meaning}的时刻。`]
      ],
      [
        [`De kamer is ${lemma}.`, `这个房间很${meaning}。`],
        [`Ik vind dit ${lemma}.`, `我觉得这个很${meaning}。`],
        [`Dat is een ${lemma} voorbeeld.`, `那是一个${meaning}的例子。`]
      ]
    ]);
  }

  return pickByWord(word, [
    [
      [`Ik gebruik "${lemma}" in een zin.`, `我在句子里使用“${lemma}”。`],
      [`Kun je "${lemma}" herhalen?`, `你能重复“${lemma}”吗？`],
      [`Vandaag leer ik "${lemma}".`, `今天我学习“${lemma}”。`]
    ],
    [
      [`Ik hoor "${lemma}" vaak.`, `我经常听到“${lemma}”。`],
      [`Wat betekent "${lemma}"?`, `“${lemma}”是什么意思？`],
      [`Schrijf "${lemma}" in je schrift.`, `把“${lemma}”写在本子里。`]
    ]
  ]);
}

function pickByWord(word, items) {
  const text = word.nl || "";
  const score = [...text].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return items[score % items.length];
}

function displayExample(word) {
  if (!isGeneratedExample(word)) {
    return { nl: exampleText(word), zh: exampleTranslation(word) };
  }

  const [nl, zh] = generatedExamples(word)[0];
  return { nl, zh };
}

function buildWordForms(word) {
  const lemma = lemmaOf(word);
  if (isVerb(word)) {
    const details = VERB_FORMS[lemma];
    if (!details) {
      const examples = generatedExamples(word);
      const participle = `ge${lemma.replace(/en$/i, "d")}`;
      return {
        title: "动词用法 · werkwoord",
        forms: [["infinitief", lemma], ["te + infinitief", `te ${lemma}`], ["modal + infinitief", `wil/kan/moet ${lemma}`], ["voltooid deelwoord", `常见为 ${participle}`]],
        examples
      };
    }
    return {
      title: "动词变位 · werkwoordsvormen",
      forms: details.forms,
      examples: details.examples
    };
  }

  if (isNoun(word)) {
    const details = NOUN_FORMS[lemma];
    const article = details?.[0] || articleOf(word) || "de/het";
    const plural = details?.[1] || guessPlural(lemma);
    const examples = generatedExamples(word);
    return {
      title: "名词词形 · zelfstandig naamwoord",
      forms: [["定冠词", article], ["单数", `${article} ${lemma}`], ["复数", plural], ["复数带定冠词", `de ${plural.split(" / ")[0]}`]],
      examples: [...examples, [`Ik onthoud: ${article} ${lemma}, meervoud ${plural.split(" / ")[0]}.`, `我记住：${article} ${lemma}，复数是 ${plural.split(" / ")[0]}。`]]
    };
  }

  if (isAdjective(word)) {
    const examples = generatedExamples(word);
    return {
      title: "形容词用法 · bijvoeglijk naamwoord",
      forms: [["原形", lemma], ["带 -e", `${lemma}e`], ["比较级", "常见为 -er"], ["最高级", "常见为 het ...st"]],
      examples: [
        ...examples,
        [`De ${lemma}e vorm staat vaak voor een zelfstandig naamwoord.`, `带 -e 的形式常放在名词前。`]
      ]
    };
  }

  if (isGeneratedExample(word)) {
    return {
      title: "常用例句 · voorbeelden",
      forms: [["词条", lemma], ["词性", displayPos(word)], ["级别", word.level]],
      examples: generatedExamples(word)
    };
  }

  return null;
}

function translateGeneratedExample(example) {
  return EXAMPLE_TRANSLATIONS[example] || "中文翻译待补充。";
}

function renderForms(word) {
  const panel = $("wordForms");
  const details = buildWordForms(word);
  if (!details) {
    panel.innerHTML = "";
    return;
  }

  const forms = details.forms
    .map(([label, value]) => `<div class="form-item"><small>${label}</small><strong>${value}</strong></div>`)
    .join("");
  const examples = details.examples
    .map((entry) => {
      const example = Array.isArray(entry) ? entry[0] : entry;
      const translation = Array.isArray(entry) ? entry[1] : translateGeneratedExample(example);
      return `
      <div class="form-example">
        <span><strong>${example}</strong><small>${translation}</small></span>
        <button class="mini-button form-speak" type="button" data-speak="${encodeURIComponent(example)}" aria-label="播放这个例句" title="播放这个例句">▶</button>
      </div>
    `;
    })
    .join("");

  panel.innerHTML = `
    <div class="forms-title">${details.title}</div>
    <div class="form-grid">${forms}</div>
    <div class="form-examples">${examples}</div>
  `;
  panel.querySelectorAll(".form-speak").forEach((button) => {
    button.addEventListener("click", () => speak(decodeURIComponent(button.dataset.speak), 0.82));
  });
}

function renderStats() {
  const { total, correct } = state.progress.stats;
  $("learnedToday").textContent = learnedTodayCount();
  $("accuracy").textContent = total ? `${Math.round((correct / total) * 100)}%` : "0%";
  $("streak").textContent = calculateStreak();
}

function calculateStreak() {
  let count = 0;
  const cursor = new Date();
  while (true) {
    const key = cursor.toISOString().slice(0, 10);
    if (!state.progress.days[key]?.length) break;
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

function renderLearn() {
  const word = currentWord();
  const example = displayExample(word);
  const goalDone = isDailyGoalDone();
  const pausedForGoal = goalDone && !state.extraPractice;
  $("goalCard").classList.toggle("hidden", !goalDone);
  $("goalMessage").textContent = goalDone
    ? `今天已背 ${learnedTodayCount()} / ${dailyGoal()} 个词。可以去检测巩固，或继续加练。`
    : "";
  $("learnWordCard").classList.toggle("hidden", pausedForGoal);
  $("learnActions").classList.toggle("hidden", pausedForGoal);
  $("wordLevel").textContent = word.level;
  $("wordPos").textContent = displayPos(word);
  $("wordText").textContent = word.nl;
  $("wordIpa").textContent = word.ipa;
  $("wordMeaning").textContent = displayMeaning(word);
  $("wordExample").textContent = example.nl;
  $("wordExampleZh").textContent = example.zh;
  renderForms(word);
  renderStats();
  $("againBtn").textContent = goalDone && !state.extraPractice ? "去检测" : "还不熟";
  $("knownBtn").textContent = goalDone && !state.extraPractice ? "继续加练" : "记住了";
}

function markKnown(isKnown) {
  if (isDailyGoalDone() && !state.extraPractice) {
    if (isKnown) {
      state.extraPractice = true;
      renderLearn();
    } else {
      setView("quiz");
    }
    return;
  }
  const word = currentWord();
  const current = state.progress.learned[word.nl] || { seen: 0, known: 0 };
  current.seen += 1;
  if (isKnown) current.known += 1;
  state.progress.learned[word.nl] = current;
  state.progress.days[todayKey] = Array.from(new Set([...(state.progress.days[todayKey] || []), word.nl]));
  state.currentIndex += 1;
  saveProgress();
  renderLearn();
  renderLibrary();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setQuizMode(mode) {
  state.quizMode = mode;
  $("meaningModeBtn").classList.toggle("active", mode === "meaning");
  $("dictationModeBtn").classList.toggle("active", mode === "dictation");
}

function startQuizSession(mode = "meaning") {
  setQuizMode(mode);
  state.quizQueue = shuffle(dailyQuizQueue());
  state.quizIndex = 0;
  state.quizCompleted = false;
  state.quizWord = state.quizQueue[0] || filteredWords()[0] || ALL_WORDS[0];
  newQuiz(mode, true);
}

function renderQuizComplete() {
  state.quizCompleted = true;
  $("quizLevel").textContent = "完成";
  $("quizMode").textContent = "今日检测";
  $("quizPrompt").textContent = "今日检测完成";
  $("listenDictation").classList.add("hidden");
  $("choices").classList.add("hidden");
  $("typingRow").classList.add("hidden");
  $("playQuizWord").classList.add("hidden");
  $("nextQuiz").textContent = "重新检测";
  $("feedback").textContent = `这套检测已经完成：${state.quizQueue.length} 个词。`;
  $("feedback").className = "feedback ok";
}

function newQuiz(mode = "meaning", keepCurrentWord = false) {
  if (!state.quizQueue.length) {
    startQuizSession(mode);
    return;
  }
  if (!keepCurrentWord || !state.quizWord) {
    state.quizWord = state.quizQueue[state.quizIndex] || state.quizQueue[0] || ALL_WORDS[0];
  }
  setQuizMode(mode);
  state.quizAnswered = false;
  $("playQuizWord").classList.remove("hidden");
  $("quizLevel").textContent = state.quizWord.level;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("typingAnswer").value = "";

  if (state.quizMode === "dictation") {
    $("quizMode").textContent = "听写 · dictee";
    $("quizPrompt").textContent = `第 ${state.quizIndex + 1} / ${state.quizQueue.length} 个：听发音写单词`;
    $("listenDictation").classList.remove("hidden");
    $("choices").classList.add("hidden");
    $("typingRow").classList.remove("hidden");
    $("playQuizWord").textContent = "再听一次";
    $("nextQuiz").textContent = state.quizIndex + 1 >= state.quizQueue.length ? "完成检测" : "下一个词";
    window.setTimeout(() => speak(state.quizWord.nl), 250);
    return;
  }

  $("quizMode").textContent = "猜词义 · betekenis";
  $("quizPrompt").textContent = `第 ${state.quizIndex + 1} / ${state.quizQueue.length} 个：${state.quizWord.nl}`;
  $("listenDictation").classList.add("hidden");
  $("choices").classList.remove("hidden");
  $("typingRow").classList.add("hidden");
  $("playQuizWord").textContent = "听发音";
  $("nextQuiz").textContent = "下一题";
  renderChoices();
}

function renderChoices() {
  const pool = meaningQuizWords();
  const correctMeaning = quizMeaning(state.quizWord);
  const distractors = shuffle(pool.filter((word) => word.nl !== state.quizWord.nl && quizMeaning(word) !== correctMeaning)).slice(0, 3);
  const choices = shuffle([state.quizWord, ...distractors]);
  $("choices").innerHTML = "";
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = quizMeaning(choice);
    button.addEventListener("click", () => checkChoice(button, choice.nl === state.quizWord.nl));
    $("choices").appendChild(button);
  });
}

function meaningQuizWords() {
  return quizWords("meaning");
}

function recordQuiz(isCorrect) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  state.progress.stats.total += 1;
  if (isCorrect) state.progress.stats.correct += 1;
  saveProgress();
  renderStats();
}

function checkChoice(button, isCorrect) {
  recordQuiz(isCorrect);
  document.querySelectorAll(".choice").forEach((item) => {
    if (item.textContent === quizMeaning(state.quizWord)) item.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("wrong");
  $("nextQuiz").textContent = "练听写";
  showFeedback(isCorrect);
}

function checkTyping() {
  const answer = cleanDutch($("typingAnswer").value);
  const expected = cleanDutch(state.quizWord.nl);
  const isCorrect = answer === expected;
  recordQuiz(isCorrect);
  $("nextQuiz").textContent = state.quizIndex + 1 >= state.quizQueue.length ? "完成检测" : "下一个词";
  showFeedback(isCorrect);
}

function showFeedback(isCorrect) {
  const example = displayExample(state.quizWord);
  $("feedback").textContent = isCorrect
    ? `对了：${state.quizWord.nl} ${state.quizWord.ipa}。意思：${quizMeaning(state.quizWord)}。${example.nl} ${example.zh}`
    : `正确答案是 ${state.quizWord.nl} ${state.quizWord.ipa}。意思：${quizMeaning(state.quizWord)}。${example.nl} ${example.zh}`;
  $("feedback").className = `feedback ${isCorrect ? "ok" : "bad"}`;
}

function renderLibrary() {
  const query = $("searchBox").value.trim().toLowerCase();
  const words = filteredWords().filter((word) => {
    const haystack = `${word.nl} ${word.ipa} ${displayMeaning(word)} ${displayPos(word)} ${exampleText(word)}`.toLowerCase();
    return haystack.includes(query);
  });
  $("wordCount").textContent = `${words.length} 词`;
  $("wordList").innerHTML = "";
  words.forEach((word) => {
    const progress = state.progress.learned[word.nl];
    const example = displayExample(word);
    const row = document.createElement("button");
    row.className = "word-row";
    row.type = "button";
    row.innerHTML = `
      <strong>${word.nl} · ${word.level}</strong>
      <p>${word.ipa}</p>
      <p>${displayPos(word)} · ${displayMeaning(word)}</p>
      <p>${example.nl}</p>
      <p>${example.zh}</p>
      <p>${progress ? `已见 ${progress.seen} 次，记住 ${progress.known} 次` : "还没学习"}</p>
    `;
    row.addEventListener("click", () => speak(word.nl));
    $("wordList").appendChild(row);
  });
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  document.querySelectorAll(".view").forEach((panel) => panel.classList.remove("active"));
  $(`${view}View`).classList.add("active");
  if (view === "quiz") startQuizSession("meaning");
  if (view === "library") renderLibrary();
}

function handleNextQuiz() {
  if (state.quizCompleted) {
    startQuizSession("meaning");
    return;
  }
  if (state.quizMode === "meaning" && state.quizAnswered) {
    newQuiz("dictation", true);
    return;
  }
  if (state.quizMode === "meaning") {
    newQuiz("dictation", true);
    return;
  }
  state.quizIndex += 1;
  if (state.quizIndex >= state.quizQueue.length) {
    renderQuizComplete();
    return;
  }
  state.quizWord = state.quizQueue[state.quizIndex];
  newQuiz("meaning", true);
}

function bindEvents() {
  $("speakCurrent").addEventListener("click", () => speak(currentWord().nl));
  $("wordButton").addEventListener("click", () => speak(currentWord().nl));
  $("speakExample").addEventListener("click", () => speak(displayExample(currentWord()).nl, 0.82));
  $("openPronunciation").addEventListener("click", () => {
    const query = encodeURIComponent(lastPronunciationText || currentWord().nl);
    window.open(`https://translate.google.com/?sl=nl&tl=zh-CN&text=${query}&op=translate`, "_blank", "noopener");
  });
  $("activateLicense").addEventListener("click", () => {
    const code = $("licenseCode").value.trim();
    if (!code) {
      renderLicense("请输入激活码。");
      return;
    }
    if (PRO_CODE_HASHES.has(codeHash(code))) {
      unlockPro(code);
      $("licenseCode").value = "";
      return;
    }
    renderLicense("激活码不正确，请检查大小写和横线。");
  });
  $("licenseCode").addEventListener("keydown", (event) => {
    if (event.key === "Enter") $("activateLicense").click();
  });
  $("knownBtn").addEventListener("click", () => markKnown(true));
  $("againBtn").addEventListener("click", () => markKnown(false));
  $("listenDictation").addEventListener("click", () => speak(state.quizWord.nl));
  $("playQuizWord").addEventListener("click", () => speak(state.quizWord.nl));
  $("nextQuiz").addEventListener("click", handleNextQuiz);
  $("meaningModeBtn").addEventListener("click", () => startQuizSession("meaning"));
  $("dictationModeBtn").addEventListener("click", () => startQuizSession("dictation"));
  $("typingCheck").addEventListener("click", checkTyping);
  $("typingAnswer").addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkTyping();
  });
  $("searchBox").addEventListener("input", renderLibrary);
  $("goalQuizBtn").addEventListener("click", () => setView("quiz"));
  $("goalMoreBtn").addEventListener("click", () => {
    state.extraPractice = true;
    renderLearn();
  });
  $("dailyGoal").addEventListener("change", (event) => {
    state.progress.goal = Number(event.target.value) || 20;
    state.extraPractice = false;
    saveProgress();
    renderLearn();
  });
  $("levelFilter").addEventListener("change", (event) => {
    state.level = event.target.value;
    state.currentIndex = 0;
    renderLearn();
    renderLibrary();
    if (state.view === "quiz") newQuiz("meaning");
  });
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => setView(tab.dataset.view));
  });
}

function init() {
  $("dailyGoal").value = state.progress.goal || 20;
  bindEvents();
  renderLicense();
  renderLearn();
  renderLibrary();
  newQuiz();
}

init();
