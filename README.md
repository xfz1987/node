# ��װ�����ʹ��
## ��װ
  ����nodejs(http://nodejs.cn/)��װ��cmd�������� node -v  ��  npm -v 
  ��ʾ�汾�ţ���˵����װ�ɹ�

## ����
  npm install npm -g

## ��װָ���汾��npm
  npm install npm@2 -g

## npmȫ������
  npm��ȫ��ģ��Ĵ��·���Լ�cache��·����Ĭ��������Ƿ����û��ļ����£������ļ���AppData�£�������������������ص���������ȫ���浽C���У�������������ļ��л���һ����ң������ˣ��������һ�̵�������Ҳ�޻���˵

  ���ã�
  1.��NodeJs��Ŀ¼�½���"node_global"��"node_cache"�����ļ���
  2.����cmd������
    npm config set prefix "D:\Program Files\nodejs\node_global"
    npm config set cache "D:\Program Files\nodejs\node_cache"
  3.�ر�cmd����ϵͳ�Ի��򣬡��ҵĵ��ԡ��Ҽ������ԡ�-���߼�ϵͳ���á�-���߼���-������������
    ϵͳ�������½�
    NODE_PATH : D:\Program Files\nodejs\node_global\node_modules

    ���ڸı���module��Ĭ�ϵ�ַ������������û�������Ҫ���Ÿı�һ��
    PATH : D:\Program Files\nodejs\node_global\
    Ҫ��ʹ��module��ʱ��ᵼ������������֡�xxx�����ڲ����ⲿ���Ҳ���ǿ����еĳ�����������ļ����������

## npm�鿴��װ���������
  	npm install <name>��װnodejs��������

	����npm install express �ͻ�Ĭ�ϰ�װexpress�����°汾��Ҳ����ͨ���ں���Ӱ汾�ŵķ�ʽ��װָ���汾����npm install express@3.0.6

	npm install <name> -g  ������װ��ȫ�ֻ�����

	���Ǵ����У�ֱ��ͨ��require()�ķ�ʽ��û�а취����ȫ�ְ�װ�İ��ġ�ȫ�ֵİ�װ�ǹ�������ʹ�õģ��ͺ���ȫ�ְ�װ��vmarket�󣬾Ϳ�������������ֱ������vm����

	npm install <name> --save  ��װ��ͬʱ������Ϣд��package.json��

	��Ŀ·���������package.json�ļ�ʱ��ֱ��ʹ��npm install�����Ϳ��Ը���dependencies���ð�װ���е�������

	���������ύ��githubʱ���Ͳ����ύnode_modules����ļ����ˡ�

	npm uninstall <name> ж��������

	npm init  �������㴴��һ��package.json�ļ����������ơ��汾��������Щ��Ϣ��

	npm remove <name>�Ƴ�

	npm update <name>����

	npm ls [����] �г���ǰ��װ�������а�
    ����: 
         Ĭ��: �����νṹ���
         --json: ��JSON��ʽ���
         --long: ���������Ϣ
         --global: ���ȫ��������Ϣ


	npm root �鿴��ǰ���İ�װ·��

	npm root -g  �鿴ȫ�ֵİ��İ�װ·��

	npm help  ���������Ҫ�����鿴install����İ���������ʹ�õ�npm help install

    
## npm����
  1.���빤��Ŀ¼��
  2.��½npm npm adduser 
  3.�½�npmģ��,����package.json  =��npm init
   


