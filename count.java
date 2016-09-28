import java.io.*;
import java.util.*;
public class count{
public static void main(String[] args) throws IOException{
  String strFilename = "jsjs.txt";
  int count = 0;
 try (BufferedReader in = new BufferedReader(new FileReader(strFilename))) {
         String inLine;
         String temp;
         int location;
         while ((inLine = in.readLine()) != null) {  // exclude newline
         temp = inLine.substring(inLine.lastIndexOf(":") + 1);
         location = countNumber(inLine);
         System.out.println(temp + location);
          if(temp.toUpperCase().equals("DC")||temp.toLowerCase().contains("washiton d.c")){
             count+=location;
             }
         }
         System.out.println(count);
      }
 catch (IOException ex) {
         ex.printStackTrace();
      }
  }
  public static int countNumber(String temp)throws NumberFormatException{
         int length = temp.length();
         
         String result = "";
         for (int i = 0; i < length; i++) {
               Character character = temp.charAt(i);
            if (Character.isDigit(character)) {
            result += character;
            }
    }
         try{
            int i = Integer.parseInt(result);
            return i;
         }catch(NumberFormatException ex){ // handle your exception
   
         }
         return 0;  
  }   
}