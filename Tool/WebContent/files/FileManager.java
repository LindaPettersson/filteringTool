/*
 * This class takes a stacktrace file 
 * and extract information about the loggs.
 * Application retrievs extracted data.
 * 
 * */
import java.io;

public class FileManager {
	
	private FileInputStream input = null;
    private int i = 0;
    private char c;
    
    //fileName = "stacktrace.log"
    public FileManager(String fileName) {
    	
    	// create new file input stream
    	input = getClass().getResourceAsStream(fileName);
    }
    
    
    // read till the end of the file
    public String ReadAll() {
    	try {
    	       while((i = input.read())!=-1) {
    	       
    	          // converts integer to character
    	          c = (char)i;
    	          
    	          // prints character
    	          System.out.print(c);
    	       }
    	       
    	    } catch(Exception ex) {
    	    
    	       // if any error occurs
    	       ex.printStackTrace();
    	    } finally {
    	       
    	       // releases all system resources from the streams
    	       if(input!=null)
    	          input.close();
    	    }
    }
    
}
