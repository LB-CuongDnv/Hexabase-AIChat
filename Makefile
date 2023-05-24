build-dev:
	cd /home/ekoios/source/agents && git pull
	cd /home/ekoios/source/agents && yarn
	cd /home/ekoios/source/agents && yarn build
	cd /home/ekoios/source/agents && pm2 restart web-agents