import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        body: Column(
          children: [
            Container(
              height: 100,
              width: double.infinity,
              color: Colors.yellow,
              child: Container(
                margin: EdgeInsets.fromLTRB(10, 50, 0, 0),
                child: Text(
                  'H:100',
                  style: TextStyle(
                    fontSize: 15,
                  ),
                ),
              ),
            ),
            Flexible(
              flex: 1,
              child: Container(
                child: Row(
                  children: [
                    Flexible(
                      flex: 1,
                      child: Container(
                        color: Colors.blue,
                        child: Center(
                          child: Text('Row - Flex:1'),
                        ),
                      ),
                    ),
                    Flexible(
                      flex: 3,
                      child: Container(
                        child: Column(
                          children: [
                            Container(
                              width: double.infinity,
                              height: 120,
                              color: Colors.grey,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Container(
                                    child: Text('Row - Flex :3'),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(top: 35),
                                    child: Text('H:120'),
                                  ),
                                ],
                              ),
                            ),
                            Flexible(
                              flex: 1,
                              child: Container(
                                width: double.infinity,
                                height: double.infinity,
                                color: Colors.green,
                                child: Align(
                                  alignment: Alignment.centerLeft,
                                  child: Text(
                                    'Col -Flex :1',
                                  ),
                                ),
                              ),
                            ),
                            Container(
                              width: double.infinity,
                              height: 150,
                              child: Align(
                                child: Text('H:150'),
                                alignment: Alignment.centerLeft,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Container(
              height: 100,
              width: double.infinity,
              color: Colors.red,
              child: Center(
                child: Text(
                  'H:100',
                  style: TextStyle(fontSize: 15),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
