var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var chai = require("chai");
var should = chai.should();
var JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);

var rootPath = getRootPath();
var appPath = '/Users/lucy/Desktop/zhulux_signed_aligned.apk';
var platformName = 'Android';

module.exports = function(){

    var driver, testVars;

    before(function(){
        var self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('tap: 请输入手机号 ( //*[@text="请输入手机号"] )', async function(){
        await driver.wait('//*[@text="请输入手机号"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 15101058801{ESCAPE}', async function(){
        await driver.sendKeys(_(`15101058801{ESCAPE}`));
    });

    it('tap: 下一步 ( //*[@text="下一步"] )', async function(){
        await driver.wait('//*[@text="下一步"]', 30000).sendElementActions('tap');
    });

    it('tap: 请输入6位验证码 ( //*[@text="请输入6位验证码"] )', async function(){
        await driver.wait('//*[@text="请输入6位验证码"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 123456{ESCAPE}', async function(){
        await driver.sendKeys(_(`123456{ESCAPE}`));
    });

    it('tap: 下一步 ( //*[@text="下一步"] )', async function(){
        await driver.wait('//*[@text="下一步"]', 30000).sendElementActions('tap');
    });

    it('tap: 请输入6位验证码 ( //*[@text="请输入6位验证码"] )', async function(){
        await driver.wait('//*[@text="请输入6位验证码"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 123456{ESCAPE}', async function(){
        await driver.sendKeys(_(`123456{ESCAPE}`));
    });

    it('tap: 登录 ( //*[@text="登录"] )', async function(){
        await driver.wait('//*[@text="登录"]', 30000).sendElementActions('tap');
    });

    it('× expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView, contain, ', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(``));
    });

    it('× tap: 领跑竞品 · 名企高管 ( //*[@text="领跑竞品 · 名企高管"] )', async function(){
        await driver.wait('//*[@text="领跑竞品 · 名企高管"]', 30000).sendElementActions('tap');
    });

    it('tap: 云层计划1 ( //*[@text="云层计划1"] )', async function(){
        await driver.wait('//*[@text="云层计划1"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="项目信息"], equal, 项目信息', async function(){
        await driver.sleep(300).wait('//*[@text="项目信息"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`项目信息`));
    });

    it('tap:  ( //*[@text=""] )', async function(){
        await driver.wait('//*[@text=""]', 30000).sendElementActions('tap');
    });

    it('× expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView, contain, ', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(``));
    });

    it('drag: 717, 1079, 824, 129, 1.00', async function(){
        await driver.sendActions('drag', {fromX: 717, fromY:1079, toX:824, toY:129, duration: 1.00});
    });

    it('drag: 581, 1544, 757, 544, 1.05', async function(){
        await driver.sendActions('drag', {fromX: 581, fromY:1544, toX:757, toY:544, duration: 1.05});
    });

    it('expect: text, //*[@text="项目"], equal, 项目', async function(){
        await driver.sleep(300).wait('//*[@text="项目"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`项目`));
    });

    it('sleep: 1000', async function(){
        await driver.sleep(1000);
    });

    it('acceptAlert: ', async function(){
        await driver.acceptAlert();
    });

    it('dismissAlert: ', async function(){
        await driver.dismissAlert();
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('tap: 取消 ( //*[@resource-id="android:id/button1"] )', async function(){
        await driver.wait('//*[@resource-id="android:id/button1"]', 30000).sendElementActions('tap');
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('tap: 取消 ( //*[@resource-id="android:id/button1"] )', async function(){
        await driver.wait('//*[@resource-id="android:id/button1"]', 30000).sendElementActions('tap');
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    var config = require(rootPath + '/config.json');
    var webdriverConfig = Object.assign({},config.webdriver);
    var host = webdriverConfig.host;
    var port = webdriverConfig.port || 4444;
    var testVars = config.vars;

    var screenshotPath = rootPath + '/screenshots';
    var doScreenshot = fs.existsSync(screenshotPath);

    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    var arrDeviceList = getEnvList() || getDeviceList(platformName);
    if(arrDeviceList.length ===0 ){
        console.log('Search mobile device failed!');
        process.exit(1);
    }

    arrDeviceList.forEach(function(device){
        var caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);

        if(doScreenshot){
            mkdirs(path.dirname(screenshotPath + '/' + caseName));
        }

        describe(caseName, function(){

            var stepId = 1;

            this.timeout(600000);
            this.slow(1000);

            before(function(){
                var self = this;
                var driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                self.driver = driver.session({
                    'platformName': platformName,
                    'udid': device.udid,
                    'app': /^(\/|[a-z]:\\|https?:\/\/)/i.test(appPath) ? appPath : rootPath + '/' + appPath
                });
                self.testVars = testVars;
                return self.driver;
            });

            module.exports();

            afterEach(function(){
                if(doScreenshot){
                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){
                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');
                    }) + '_' + (stepId++);
                    return this.driver.getScreenshot(filepath + '.png').source().then(function(code){
                        fs.writeFileSync(filepath + '.json', code);
                    }).catch(function(){});
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    var rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function getEnvList(){
    var strEnvList = process.env.devices;
    if(strEnvList){
        return strEnvList.split(/\s*,\s*/).map(function(udid){
            return {udid: udid};
        });
    }
}

function getDeviceList(platformName){
    var arrDeviceList = [];
    var strText, match;
    if(platformName === 'Android')
    {
        // for android
        strText = cp.execSync('adb devices').toString();
        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){
            arrDeviceList.push({
                udid: deviceName
            });
        });
    }
    else{
        // ios real device
        strText = cp.execSync('idevice_id -l').toString();
        strText.replace(/(.+)\r?\n/g, function(all, udid){
            var deviceName = cp.execSync('idevice_id -d '+udid).toString();
            deviceName = deviceName.replace(/\r?\n/g, '');
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
        });
        // ios simulator
        strText = cp.execSync('xcrun simctl list devices').toString();
        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
        });
    }
    return arrDeviceList;
}

