mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/mattsworkouttracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );