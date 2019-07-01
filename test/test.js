const tape = require("tape");
const runDbBuild = require("../src/dataBase/db_build");
const {addJournalist,addnews} = require("../src/dataBase/quires/postData");
const showData = require("../src/dataBase/quires/getData");
const checkemail = require("../src/dataBase/quires/checkData");
tape("test addJournalist ", t => {
  runDbBuild((err, res) => {
    if (err) t.error(err, "Error");
    const expected = "add journalist is done";
    addJournalist(
      { fullname: "testname", email: "jama@gmail.com", password: "123" },
      (error, result) => {
        if (error) {
          t.error(error);
        }
        t.equal(result, expected, "test of addJournalist is done");
        t.end();
      }
    );
  });
});

tape("test addnews ", t => {
    runDbBuild((err, res) => {
      if (err) t.error(err, "Error");
      const expected = "add journalist is done";
      addnews(
        'killing','lsakf;a','aslsdp',1,
        (error, result) => {
          if (error) {
            t.error(error);
          }
          t.equal(result, expected, "test of addJournalist is done");
          t.end();
        }
      );
    });
  });

tape("test showData", t => {
  runDbBuild((err, res) => {
    const expected = {
      fullname: "jamalat",
      title: "The utter absurdity of Trumps July Fourth bash",
      descriptions:
        "HOLD THE DATE! We will be having one of the biggest gatherings in the history of Washington, D.C., on July 4th. It will be called a Salute To America and will be held at the Lincoln Memorial. Major fireworks display, entertainment and an address by your favorite President, me!",
      field: "politics"
    };
    showData((err, res) => {
      if (err) t.error(err);
      t.deepEqual(res[0], expected, "test of showData is done ");
      t.end();
    });
  });
});

tape("test checkemail", t => {
  runDbBuild((err, res) => {
    const expected = [
      {
        id: 1,
        fullname: "jamalat",
        email: "jamalat@gmial.com",
        password: "123"
      }
    ];
    checkemail("jamalat@gmial.com", (err, res) => {
      if (err) t.error(err);
      t.deepEqual(res, expected, "test of checkemail is done ");
      t.end();
    });
  });
});
tape.onFinish(() => process.exit(0));
