module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {

	uri:env('DATABASE_URI','mongodb://faisal:faisal@cluster0-shard-00-00.bwhqd.mongodb.net:27017,cluster0-shard-00-01.bwhqd.mongodb.net:27017,cluster0-shard-00-02.bwhqd.mongodb.net:27017/my-project?ssl=true&replicaSet=atlas-sqvfmy-shard-0&authSource=admin&retryWrites=true&w=majority'),


  },
      options: {
	ssl:true,

      },
    },
  },
});
