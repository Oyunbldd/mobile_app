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
        backgroundColor: Colors.grey,
      ),
      home: Scaffold(
        backgroundColor: Colors.grey[800],
        body: SafeArea(
          child: Container(
            padding: EdgeInsets.all(20),
            child: Column(
              children: [
                Text(
                  'Movies',
                  style: TextStyle(
                      fontSize: 28,
                      color: Colors.white,
                      fontWeight: FontWeight.bold),
                ),
                ListView(
                  children: [
                    Container(
                      height: 150,
                      // decoration: BoxDecoration(bo),
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
